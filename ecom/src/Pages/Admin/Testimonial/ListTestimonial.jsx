import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import $ from 'jquery';  // Import jQuery
import 'datatables.net-dt/css/dataTables.dataTables.min.css'; // Import DataTables styles
import 'datatables.net';
import { getTestimonial } from '../../../Redux/ActionCreators/TestimonialActionCreators';

export default function ListTestimonial() {

    let [data, setData] = useState([])
    let dispatch = useDispatch()
    let TestimonialStateData = useSelector((state)=>state.TestimonialStateData)

    async function deleteData(id) {
        
        if(window.confirm("Are you sure to delete this Record?")) {
            let response = await fetch(`${process.env.REACT_APP_SERVER}/testimonial/${id}`, {
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
       // console.log(TestimonialStateData);
        
        dispatch(getTestimonial())
        if(TestimonialStateData.length) {
            setData(TestimonialStateData)
        } else {
            setData([])
        }

        setTimeout(()=>{
            $('#testimonial').DataTable()
        },200)

    }

    /* async function getAPIData() {
        //$('#testimonial').dataTable();
        let response = await fetch(`${process.env.REACT_APP_SERVER}/testimonial`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })

        response = await response.json()

        if (response) {
            setData(response)
            setTimeout(()=>{
                $('#testimonial').DataTable()
            },200)

        } else {
            alert("something went wrong");
        }

    } */

    useEffect(() => {
        getAPIData()
    }, [TestimonialStateData.length])
    return (
        <div className='container-fluid my-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar />
                </div>
                <div className='col-md-9'>
                    <div className='bg-primary p-2 text-light text-center'>Testimonial <Link to='/admin/testimonial/create' className='text-light' style={{ float: "right" }}><i className='fa fa-plus text-light'></i> Create Testimonial</Link></div>
                    <table className='table table-bordered' id='testimonial'>
                        <thead>
                            <tr>
                                <th width="5%">Sr.No.</th>
                                <th width="20%">Name</th>
                                <th width="25%">Message</th>
                                <th width="30%">Image</th>
                                <th width="10%">Active</th>
                                <th width="10%">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.message}</td>
                                        <td>
                                        {/* "proxy":"http://localhost:8000",
                                        proxy show 3000 but if data not found then redirect to 8000 (data with proxy)
                                            <a href={`/${item.pic}`} target="_blank" ><img src={`/${item.pic}`} height="50" alt="" /></a> */}
                                            {/* REACT_APP_SERVER = "http://localhost:8000"(set in .env) */}
                                            <a href={`${process.env.REACT_APP_SERVER}/${item.pic}`} rel="noreferrer" target="_blank" ><img src={`${process.env.REACT_APP_SERVER}/${item.pic}`} height="50" alt="" /></a>
                                        </td>
                                        <td>{item.active ? 'Yes' : 'No'}</td>
                                        <td>
                                            <Link to={`/admin/Testimonial/update/${item.id}`}><i className='fa fa-edit'></i></Link>&nbsp;
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
