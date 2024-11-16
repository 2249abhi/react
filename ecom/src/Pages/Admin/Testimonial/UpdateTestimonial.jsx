import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Sidebar from '../../Components/Sidebar'

import formValidator from '../../Validators/formValidator'
import imageValidator from '../../Validators/imageValidator'

import { getTestimonial, updateTestimonial, editTestimonial } from "../../../Redux/ActionCreators/TestimonialActionCreators"

export default function UpdateTestimonial() {

    let { id } = useParams()
    let [testimonial, setTestimonial] = useState([])
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

    let TestimonialStateData = useSelector((state) => state.TestimonialStateData)

    let dispatch = useDispatch()

    let navigate = useNavigate()


    function getInputData(e) {
        let name = e.target.name
        var value = e.target.files ? "testimonial/" + e.target.files[0].name : e.target.value
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
            dispatch(updateTestimonial({ ...data }))

            //for real backend

            // const item = new FormData()
            // item.append("_id",data._id)//for mongodb
            // item.append("id",data._id)//for other DB
            // item.append("name",data.name)
            // item.append("message",data.message)
            // item.append("pic",data.pic)
            // item.append("active",data.active)
            // dispatch(updateTestimonial(item))

            navigate("/admin/testimonial")
        }

    }

    useEffect(() => {
        (() => {
            //dispatch(editTestimonial(id))
            // if(TestimonialStateData) {
            //  setData({...TestimonialStateData})
            // } else {
            //     setData([])
            // }

            dispatch(getTestimonial())
            if (TestimonialStateData.length) {
                setTestimonial(TestimonialStateData)
                let item = TestimonialStateData.find((x) => x.id === id)
                setData({ ...item })
            }
        })()
    }, [TestimonialStateData.length])

    /* async function postData(e) {
         e.preventDefault()
         console.log(errorMessage);
         
         let error = Object.values(errorMessage).find((x) => x !== '')
         if (error) {
             setShow(true)
         }
         else {
            let response = await fetch(`${process.env.REACT_APP_SERVER}/testimonial/${id}`,{
                 method:"PUT",
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
         }
             
     }*/

    /*  useEffect(()=>{
         (async ()=>{
             let response = await fetch(`${process.env.REACT_APP_SERVER}/Testimonial/${id}`, {
                 method: "GET",
                 headers: {
                     "content-type": "application/json"
                 }
             })
             response = await response.json()
 
             if (response) {
                // setTestimonial(response)
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
                    <div className='bg-primary p-2 text-light text-center'>Update Testimonial <Link to='/admin/Testimonial' className='fa fa-backward float-end text-light' > Back</Link></div><br />
                    <div className='container'>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label >Testimonial Name*</label>
                                    <input type="text" name="name" value={data.name} onChange={getInputData} className={`form-control ${show && errorMessage.name ? 'border-danger' : ''}`} id="nameFormControlInput1" placeholder="Enter Testimonial Name" />
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
                                    <textarea type="text" rows={5} value={data.message} name="message" onChange={getInputData} className={`form-control ${show && errorMessage.message ? 'border-danger' : ''}`} id="messageFormControlInput1" placeholder="Enter Testimonial Message" ></textarea>
                                    {show && errorMessage.message ? <p className='text-danger text-capitalize'>{errorMessage.message}</p> : '   '}
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
