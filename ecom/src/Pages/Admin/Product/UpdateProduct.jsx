import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Sidebar from '../../Components/Sidebar'

import formValidator from '../../Validators/formValidator'
import imageValidator from '../../Validators/imageValidator'

import {getProduct, updateProduct, editProduct} from "../../../Redux/ActionCreators/ProductActionCreators"

export default function UpdateProduct() {

    let {id} = useParams()
    let [Product, setProduct] = useState([])
    let [data, setData] = useState({
        name: "",
        pic: "",
        active: true
    })

    let [errorMessage, setErrorMessage] = useState({
        name: "",
        pic: ""
    })

    let [show, setShow] = useState(false)

    let ProductStateData = useSelector((state)=>state.ProductStateData)

    let dispatch = useDispatch()

    let navigate = useNavigate()
    

    function getInputData(e) {
        let name = e.target.name
        var value = e.target.files ? "product/" + e.target.files[0].name : e.target.value
        if (name !== 'active') {
            setErrorMessage((old) => {
                return {
                    ...old,
                    [name]: e.target.files ? imageValidator(e) : formValidator(e)
                }
            })
        }
        setData((old) => {
            return {
                ...old,
                [name]: name === 'active' ? (value === '1' ? true : false) : value
            }
        })
    }

    function postData(e) {
        e.preventDefault()
        
        let error = Object.values(errorMessage).find((x) => x !== '')
        if (error) {
            setShow(true)
        }
        else {
            dispatch(updateProduct({...data}))

            //for real backend

            // const item = new FormData()
            // item.append("_id",data._id)//for mongodb
            // item.append("id",data._id)//for other DB
            // item.append("name",data.name)
            // item.append("pic",data.pic)
            // item.append("active",data.active)
            // dispatch(updateProduct(item))

            navigate("/admin/product")
        }
            
    }

    useEffect(()=>{
        (()=>{            
            //dispatch(editProduct(id))
            // if(ProductStateData) {
            //  setData({...ProductStateData})
            // } else {
            //     setData([])
            // }

            dispatch(getProduct())
            if (ProductStateData.length) {
                setProduct(ProductStateData)
                let item = ProductStateData.find((x) => x.id === id)
                setData({ ...item })
            }
        })()
    },[ProductStateData.length])
    
   /* async function postData(e) {
        e.preventDefault()
        console.log(errorMessage);
        
        let error = Object.values(errorMessage).find((x) => x !== '')
        if (error) {
            setShow(true)
        }
        else {
           let response = await fetch(`${process.env.REACT_APP_SERVER}/product/${id}`,{
                method:"PUT",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({...data})
           })
           response = await response.json()
           if(response)
            navigate("/admin/product")   
           else
           alert("something went wrong")
        }
            
    }*/
    
   /*  useEffect(()=>{
        (async ()=>{
            let response = await fetch(`${process.env.REACT_APP_SERVER}/Product/${id}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            })
            response = await response.json()

            if (response) {
               // setProduct(response)
                //let item = response.find((x) => x.id === id)
                if (response) {
                    setData({ ...response })
                }
            }
            else {
                alert("Something Went Wrong")
            }
                

        })()
    },[])  */

    return (
        <div className='container-fluid my-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar />
                </div>
                <div className='col-md-9'>
                    <div className='bg-primary p-2 text-light text-center'>Update Product <Link to='/admin/Product' className='fa fa-backward float-end text-light' > Back</Link></div><br />
                    <div className='container'>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label >Product Name*</label>
                                    <input type="text" name="name" value={data.name} onChange={getInputData} className={`form-control ${show && errorMessage.name ? 'border-danger' : ''}`} id="nameFormControlInput1" placeholder="Enter Product Name" />
                                    {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : '   '}
                                </div>
                                <div className="form-group col-md-4">
                                    <label >Product Pic*</label>
                                    <input type="file" name="pic" onChange={getInputData} className={`form-control ${show && errorMessage.pic ? 'border-danger' : ''}`} id="picFormControlInput1" />
                                    {show && errorMessage.pic ? <p className='text-danger text-capitalize'>{errorMessage.pic}</p> : '   '}
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Status</label>
                                    <select name='active' value={data.active?"1":"0"} onChange={getInputData} className='form-control'>
                                        <option value="1">Yes</option>
                                        <option  value="0">No</option>
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary mt-2">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
