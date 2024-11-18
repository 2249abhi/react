import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Sidebar from '../../Components/Sidebar'

import formValidator from '../../Validators/formValidator'
import imageValidator from '../../Validators/imageValidator'

import { createProduct } from '../../../Redux/ActionCreators/ProductActionCreators'
import { getMaincategory } from '../../../Redux/ActionCreators/MaincategoryActionCreators';
import { getSubcategory } from '../../../Redux/ActionCreators/SubcategoryActionCreators';
import { getBrand } from '../../../Redux/ActionCreators/BrandActionCreators';

export default function CreateProduct() {

    let [maincategory, setMaincategory] = useState([])
    let [subcategory, setSubcategory] = useState([])
    let [brand, setBrand] = useState([])

    let [data, setData] = useState({
        name: "",
        pic: "",
        maincategory: "",
        subcategory: "",
        brand: "",
        description: "",
        basePrice: 0,
        discount: 0,
        finalPrice: 0,
        active: true

    })

    let [errorMessage, setErrorMessage] = useState({
        name: "Name field is mendatoy",
        pic: "Pic field is mendatory",
        basePrice: "Base Price Field is Mendatory",
        discount: "Discount Field is Mendatory",
        description:""
    })

    let [show, setShow] = useState(false)
    let navigate = useNavigate()
    let dispatch = useDispatch()

    //let ProductStateData = useSelector((state) => state.ProductStateData)
    let MaincategoryStateData = useSelector((state) => state.MaincategoryStateData)
    let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData)
    let BrandStateData = useSelector((state) => state.BrandStateData)

    function getInputData(e) {
        let name = e.target.name
        var value = e.target.files ? "product/" + e.target.files[0].name : e.target.value
        //console.log(value);
        
        // var value = e.target.files ?  e.target.files : e.target.value //in case of real backend
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
        //console.log(errorMessage);

        let error = Object.values(errorMessage).find((x) => x !== '')
        if (error) {
            setShow(true)
        }
        else {
        //     console.log('success');
            
            /* let response = await fetch(`${process.env.REACT_APP_SERVER}/product`,{
                method:"POST",
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
                    */

            dispatch(createProduct({ 
                ...data,
                maincategory: data.maincategory ? data.maincategory : "",
                basePrice: parseInt(data.basePrice),
                discount: parseInt(data.discount),
                finalPrice: parseInt(data.basePrice - data.basePrice * data.discount / 100)
            }))

            //for real backend
            // const item = new FormData()
            // item.append("name",data.name)
            // item.append("pic",data.pic)
            // item.append("active",data.active)
            // dispatch(createProduct(item))

            navigate("/admin/Product")


        }

    }

    useEffect(() => {
        (() => {
            dispatch(getMaincategory())
            if (MaincategoryStateData.length) {
                setMaincategory(MaincategoryStateData)                
            }

        })()
    }, [MaincategoryStateData.length])

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
                    <div className='bg-primary p-2 text-light text-center'>Create Product <Link to='/admin/product' className='fa fa-backward float-end text-light' > Back</Link></div><br />
                    <div className='container'>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className=" col-md-3">
                                    <label>Main Category</label>
                                    <select name='maincategory' onChange={getInputData} className='form-control'>
                                        <option value="">--Select--</option>
                                        {
                                            maincategory.map((data,index)=>{
                                                return <option key={index} value={data.id}>{data.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label>Sub Category</label>
                                    <select name='subcategory' onChange={getInputData} className='form-control'>
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
                                    <select name='brand' onChange={getInputData} className='form-control'>
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
                                <div className="col-md-4">
                                    <label >Product Name*</label>
                                    <input type="text" name="name" onChange={getInputData} className={`form-control ${show && errorMessage.name ? 'border-danger' : ''}`} id="nameFormControlInput1" placeholder="Enter Product Name" />
                                    {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : '   '}
                                </div>
                                <div className="col-md-4">
                                    <label >Product Pic*</label>
                                    <input type="file" name="pic" onChange={getInputData} className={`form-control ${show && errorMessage.pic ? 'border-danger' : ''}`} id="picFormControlInput1" />
                                    {show && errorMessage.pic ? <p className='text-danger text-capitalize'>{errorMessage.pic}</p> : '   '}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label>Base Price*</label>
                                    <input type="number" name="basePrice" onChange={getInputData} className={`form-control ${show && errorMessage.basePrice ? 'border-danger' : 'border-primary'}`} placeholder='Base Price' />
                                    {show && errorMessage.basePrice ? <p className='text-danger text-capitalize'>{errorMessage.basePrice}</p> : ""}
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label>Discount*</label>
                                    <input type="number" name="discount" onChange={getInputData} className={`form-control ${show && errorMessage.discount ? 'border-danger' : 'border-primary'}`} placeholder='Discount in percent' />
                                    {show && errorMessage.discount ? <p className='text-danger text-capitalize'>{errorMessage.discount}</p> : ""}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label >Description*</label>
                                    <textarea name="description" rows={5} onChange={getInputData} className={`form-control ${show && errorMessage.description ? 'border-danger' : ''}`} id="description"></textarea>
                                    {/* <input type="text" name="description" onChange={getInputData} className={`form-control ${show && errorMessage.description ? 'border-danger' : ''}`} id="description" placeholder="Enter Description" /> */}
                                    {show && errorMessage.description ? <p className='text-danger text-capitalize'>{errorMessage.description}</p> : '   '}
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Status</label>
                                    <select name='active' onChange={getInputData} className='form-control'>
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
