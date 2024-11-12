import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Sidebar from '../../Components/Sidebar'

import formValidator from '../../Validators/formValidator'
import imageValidator from '../../Validators/imageValidator'
import { createReduxMaincategory } from '../../../Redux/ActionCreators/MaincategoryActionCreators'

 
export default function CreateMainCategory() {
    let [data, setData] = useState({
        name: "",
        pic: "",
        active: true

    })

    let [errorMessage, setErrorMessage] = useState({
        name: "Name field is mendatoy",
        pic: "Pic field is mendatory"
    })

    let [show, setShow] = useState(false)
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let MaincategoryStateData = useSelector((state)=>state.MaincategoryStateData)
    
    function getInputData(e) {
        let name = e.target.name
        var value = e.target.files ? "maincategory/" + e.target.files[0].name : e.target.value
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

   async function postData(e) {
        e.preventDefault()
        // console.log(errorMessage);
        
        let error = Object.values(errorMessage).find((x) => x !== '')
        if (error) {
            setShow(true)
        }
        else {
            /* let response = await fetch(`${process.env.REACT_APP_SERVER}/maincategory`,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                    },
                    body:JSON.stringify({...data})
                    })
                    response = await response.json() 

                    if(response)
                    navigate("/admin/maincategory")   
                    else
                    alert("something went wrong")
                    */        

                dispatch(createReduxMaincategory())
                
                navigate("/admin/maincategory")   

           
        }
            
    }

    return (
        <div className='container-fluid my-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar />
                </div>
                <div className='col-md-9'>
                    <div className='bg-primary p-2 text-light text-center'>Create Main Category <Link to='/admin/maincategory' className='fa fa-backward float-end text-light' > Back</Link></div><br />
                    <div className='container'>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label >Main Category Name*</label>
                                    <input type="text" name="name" onChange={getInputData} className={`form-control ${show && errorMessage.name ? 'border-danger' : ''}`} id="nameFormControlInput1" placeholder="Enter Main Category Name" />
                                    {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : '   '}
                                </div>
                                <div className="form-group col-md-4">
                                    <label >Main Category Pic*</label>
                                    <input type="file" name="pic" onChange={getInputData} className={`form-control ${show && errorMessage.pic ? 'border-danger' : ''}`} id="picFormControlInput1" />
                                    {show && errorMessage.pic ? <p className='text-danger text-capitalize'>{errorMessage.pic}</p> : '   '}
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
