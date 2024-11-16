import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Sidebar from '../../Components/Sidebar'

import formValidator from '../../Validators/formValidator'
import imageValidator from '../../Validators/imageValidator'
import { createTestimonial } from '../../../Redux/ActionCreators/TestimonialActionCreators'


export default function CreateTestimonial() {
    let [data, setData] = useState({
        name: "",
        pic: "",
        message: "",
        active: true

    })

    let [errorMessage, setErrorMessage] = useState({
        name: "Name field is mendatoy",
        message: "Message field is mendatoy",
        pic: "Pic field is mendatory"
    })

    let [show, setShow] = useState(false)
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let TestimonialStateData = useSelector((state) => state.TestimonialStateData)

    function getInputData(e) {
        let name = e.target.name
        var value = e.target.files ? "testimonial/" + e.target.files[0].name : e.target.value
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

    async function postData(e) {
        e.preventDefault()
        // console.log(errorMessage);

        let error = Object.values(errorMessage).find((x) => x !== '')
        if (error) {
            setShow(true)
        }
        else {
            /* let response = await fetch(`${process.env.REACT_APP_SERVER}/testimonial`,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                    },
                    body:JSON.stringify({...data})
                    })
                    response = await response.json() 

                    if(response)
                    navigate("/admin/testimonial")   
                    else
                    alert("something went wrong")
                    */

            dispatch(createTestimonial({ ...data }))

            //for real backend
            // const item = new FormData()
            // item.append("name",data.name)
            // item.append("message",data.message)
            // item.append("pic",data.pic)
            // item.append("active",data.active)
            // dispatch(createTestimonial(item))

            navigate("/admin/testimonial")


        }

    }

    return (
        <div className='container-fluid my-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar />
                </div>
                <div className='col-md-9'>
                    <div className='bg-primary p-2 text-light text-center'>Create Testimonial <Link to='/admin/testimonial' className='fa fa-backward float-end text-light' > Back</Link></div><br />
                    <div className='container'>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label >Testimonial Name*</label>
                                    <input type="text" name="name" onChange={getInputData} className={`form-control ${show && errorMessage.name ? 'border-danger' : ''}`} id="nameFormControlInput1" placeholder="Enter Testimonial Name" />
                                    {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : '   '}
                                </div>
                                <div className="form-group col-md-4">
                                    <label >Testimonial Pic*</label>
                                    <input type="file" name="pic" onChange={getInputData} className={`form-control ${show && errorMessage.pic ? 'border-danger' : ''}`} id="picFormControlInput1" />
                                    {show && errorMessage.pic ? <p className='text-danger text-capitalize'>{errorMessage.pic}</p> : '   '}
                                </div>
                            </div>
                            <div className='row'>
                                <div className="form-group col-md-12">
                                    <label >Message*</label>
                                    <textarea type="text" rows={5} name="message" onChange={getInputData} className={`form-control ${show && errorMessage.message ? 'border-danger' : ''}`} id="messageFormControlInput1" placeholder="Enter Testimonial Message" ></textarea>
                                    {show && errorMessage.message ? <p className='text-danger text-capitalize'>{errorMessage.message}</p> : '   '}
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
