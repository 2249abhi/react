import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import $ from 'jquery';  // Import jQuery
import 'datatables.net-dt/css/dataTables.dataTables.min.css'; // Import DataTables styles
import 'datatables.net';
import { getBrand } from '../../../Redux/ActionCreators/BrandActionCreators';

export default function ListBrand() {

    let [data, setData] = useState([])
    let dispatch = useDispatch()
    let BrandStateData = useSelector((state)=>state.BrandStateData)

    async function deleteData(id) {
        
        if(window.confirm("Are you sure to delete this Record?")) {
            let response = await fetch(`${process.env.REACT_APP_SERVER}/brand/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                }
            })
    
            response = await response.json()
            //if(response) {
                getAPIData()
            //}
        }
        
    }

    function getAPIData() {
       // console.log(BrandStateData);
        
        dispatch(getBrand())
        if(BrandStateData.length) {
            setData(BrandStateData)
        } else {
            setData([])
        }

        setTimeout(()=>{
            $('#brand').DataTable()
        },200)

    }

    /* async function getAPIData() {
        //$('#brand').dataTable();
        let response = await fetch(`${process.env.REACT_APP_SERVER}/brand`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })

        response = await response.json()

        if (response) {
            setData(response)
            setTimeout(()=>{
                $('#brand').DataTable()
            },200)

        } else {
            alert("something went wrong");
        }

    } */

    useEffect(() => {
        getAPIData()
    }, [BrandStateData.length])
    return (
        <div className='container-fluid my-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar />
                </div>
                <div className='col-md-9'>
                    <div className='bg-primary p-2 text-light text-center'>Brand <Link to='/admin/brand/create' className='text-light' style={{ float: "right" }}><i className='fa fa-plus text-light'></i> Create Brand</Link></div>
                    <table className='table table-bordered' id='brand'>
                        <thead>
                            <tr>
                                <th>Sr.No.</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Active</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>
                                        {/* "proxy":"http://localhost:8000",
                                        proxy show 3000 but if data not found then redirect to 8000 (data with proxy)
                                            <a href={`/${item.pic}`} target="_blank" ><img src={`/${item.pic}`} height="50" alt="" /></a> */}
                                            {/* REACT_APP_SERVER = "http://localhost:8000"(set in .env) */}
                                            <a href={`${process.env.REACT_APP_SERVER}/${item.pic}`} rel="noreferrer" target="_blank" ><img src={`${process.env.REACT_APP_SERVER}/${item.pic}`} height="50" alt="" /></a>
                                        </td>
                                        <td>{item.active ? 'Yes' : 'No'}</td>
                                        <td>
                                            <Link to={`/admin/Brand/update/${item.id}`}><i className='fa fa-edit'></i></Link>&nbsp;
                                            <button className='btn' onClick={()=>deleteData(item.id)} ><i className='fa fa-trash' style={{color:"red"}}></i></button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
