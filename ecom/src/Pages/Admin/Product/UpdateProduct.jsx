import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Sidebar from '../../Components/Sidebar'

import formValidator from '../../Validators/formValidator'
import imageValidator from '../../Validators/imageValidator'

import { getProduct, updateProduct, editProduct } from "../../../Redux/ActionCreators/ProductActionCreators"

import { getMaincategory } from '../../../Redux/ActionCreators/MaincategoryActionCreators';
import { getSubcategory } from '../../../Redux/ActionCreators/SubcategoryActionCreators';
import { getBrand } from '../../../Redux/ActionCreators/BrandActionCreators';

export default function UpdateProduct() {

    let { id } = useParams()
    let [Product, setProduct] = useState([])
    let [maincategory, setMaincategory] = useState([])
    let [subcategory, setSubcategory] = useState([])
    let [brand, setBrand] = useState([])

    let [data, setData] = useState({
        name: "",
        pic: "",
        maincategory:"",
        subcategory:"",
        brand:"",
        basePrice: 0,
        discount: 0,
        finalPrice: 0,
        active: true
    })

    let [errorMessage, setErrorMessage] = useState({
        name: "",
        pic: "",
        description:""
    })

    let [show, setShow] = useState(false)

    let ProductStateData = useSelector((state) => state.ProductStateData)
    let MaincategoryStateData = useSelector((state)=>state.MaincategoryStateData)
    let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData)
    let BrandStateData = useSelector((state) => state.BrandStateData)

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
            dispatch(updateProduct(
                { 
                    ...data,
                    maincategory: data.maincategory ? data.maincategory : "",
                    basePrice: parseInt(data.basePrice),
                    discount: parseInt(data.discount),
                    finalPrice: parseInt(data.basePrice - data.basePrice * data.discount / 100) 

                }))

            //for real backend

            // const item = new FormData()
            // item.append("_id",data._id)//for mongodb
            // item.append("id",data.id)//for other DB
            // item.append("name",data.name)
            // item.append("pic",data.pic)
            // item.append("active",data.active)
            // dispatch(updateProduct(item))

            navigate("/admin/product")
        }

    }

    useEffect(() => {
        (() => {
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
    }, [ProductStateData.length])

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

     useEffect(()=>{
        (()=>{
            dispatch(getMaincategory())

            if(MaincategoryStateData.length) {
                setMaincategory(MaincategoryStateData)
            } else {
                setMaincategory([])
            }

        })()
     },[MaincategoryStateData.length])

     useEffect(() => {
        (() => {
            dispatch(getSubcategory())
            if (SubcategoryStateData.length) {
                setSubcategory(SubcategoryStateData)                
            }

        })()
    }, [SubcategoryStateData.length])

    useEffect(() => {
        (() => {
            dispatch(getBrand())
            if (BrandStateData.length) {
                setBrand(BrandStateData)                
            }

        })()
    }, [BrandStateData.length])

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
                                <div className="col-md-3">
                                    <label>Main Category</label>
                                    <select name='maincategory' value={data.maincategory} onChange={getInputData} className='form-control'>
                                        <option value="">--Select--</option>
                                        {
                                            maincategory.map((item, index) => {
                                                return <option key={index} value={item.id}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label>Sub Category</label>
                                    <select name='subcategory' value={data.subcategory} onChange={getInputData} className='form-control'>
                                        <option value="">--Select--</option>
                                        {
                                            subcategory.map((item,index)=>{
                                                return <option key={index} value={item.id}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label>Brand</label>
                                    <select name='brand' value={data.brand} onChange={getInputData} className='form-control'>
                                        <option value="">--Select--</option>
                                        {
                                            brand.map((item,index)=>{
                                                return <option key={index} value={item.id}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
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
                                <div className="col-md-4 mb-3">
                                    <label>Base Price*</label>
                                    <input type="number" name="basePrice" value={data.basePrice} onChange={getInputData} className={`form-control ${show && errorMessage.basePrice ? 'border-danger' : 'border-primary'}`} placeholder='Base Price' />
                                    {show && errorMessage.basePrice ? <p className='text-danger text-capitalize'>{errorMessage.basePrice}</p> : ""}
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label>Discount*</label>
                                    <input type="number" name="discount" value={data.discount} onChange={getInputData} className={`form-control ${show && errorMessage.discount ? 'border-danger' : 'border-primary'}`} placeholder='Discount in percent' />
                                    {show && errorMessage.discount ? <p className='text-danger text-capitalize'>{errorMessage.discount}</p> : ""}
                                </div>
                                <div className="col-md-4 mb-3">
                                    <h4 className='mt-4'>Final Price: {data.finalPrice}</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label >Description*</label>
                                    <textarea name="description" value={data.description} rows={5} onChange={getInputData} className={`form-control ${show && errorMessage.description ? 'border-danger' : ''}`} id="description"></textarea>
                                    {/* <input type="text" name="description" onChange={getInputData} className={`form-control ${show && errorMessage.description ? 'border-danger' : ''}`} id="description" placeholder="Enter Description" /> */}
                                    {show && errorMessage.description ? <p className='text-danger text-capitalize'>{errorMessage.description}</p> : '   '}
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Status</label>
                                    <select name='active' value={data.active ? "1" : "0"} onChange={getInputData} className='form-control'>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
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
