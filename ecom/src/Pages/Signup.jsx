import React, { useState } from 'react'

import HeroSection from './Components/HeroSection'
import formValidator from './Validators/formValidator'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {

    let [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        // phone: "",
        // password: "",
        // cpassowrd: ""
    })

    let [errorMessage, setErrorMessage] = useState({
        name: "Name field is Mendatory",
        username: "Username field is Mendatory",
        email: "Email field is Mendatory",
        // phone: "Phone field is Mendatory",
        // password: "Password field is Mendatory",
    })

    let [show, setShow] = useState(false)
    let navigate = useNavigate()

    function getInputData(e) {
        let { name, value } = e.target

        setErrorMessage((old) => {
            return {
                ...old,
                [name]: formValidator(e)
            }
        })
        setData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }

    //we will not use redux because we dont want all user data
    async function postData(e) {
        e.preventDefault()

        let error = Object.values(errorMessage).find((x)=>x!=="")
        if(error) {
            console.log(error);
            setShow(true)
        } else {
            
            let res = await fetch(`${process.env.REACT_APP_SERVER}/user`,{
                method:"GET",
                headers:{
                    "content-type":"application/json"
                }
            })

            res = await res.json()

            let item = res.find((x)=>x.username === data.username || x.email === data.email)

            if(item) {
                setShow(true)
                setErrorMessage((old)=>{
                    return {
                        ...old,
                        'username':item.username === data.username ? "Username is already taken": "",
                        'email':item.email === data.email ? "Email is already taken": ""
                    }
                })
            } else {

                let response = await fetch(`${process.env.REACT_APP_SERVER}/user`,{
                    method:"POST",
                    headers: {
                        "content-type":"application/json"
                    },
                    body:JSON.stringify({
                        name:data.name,
                        username:data.username,
                        phone:data.phone,
                        email:data.email,
                        password:data.password,
                        role:"Buyer"
                    })
                })
    
                if(response) {
    
                    //for session we can use session storage or local storage
                    //session storage will work till browser open. if browser closed then session lost (most websites used it)
                    //for permanent login we can use local storage it will remain until we delete it.
                    
                    localStorage.setItem("login",true)
                    localStorage.setItem("name",response.name)
                    localStorage.setItem("email",response.email)
                    localStorage.setItem("userid",response.id)
                    localStorage.setItem("role",response.role)
                    
                    navigate("/profile")   
                } else {
                    alert("something went wrong")
                }
                
            }


             
                
        }
            

    }

    return (
        <>
            <HeroSection title="Signup" />
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-8 col-sm-9 col-11 m-auto">
                        <h5 className='bg-primary text-light p-2 text-center'>Create Account</h5>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label >Full Name*</label>
                                    <input type="text" name="name" onChange={getInputData} className={`form-control ${show && errorMessage.name ? 'border-danger' : 'border-primary'}`}  placeholder="Enter Name" />
                                    {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : ''}
                                </div>
                                <div className="form-group col-md-6">
                                    <label >User Name*</label>
                                    <input type="text" name="username" onChange={getInputData} className={`form-control ${show && errorMessage.username ? 'border-danger' : 'border-primary'}`}  placeholder="Enter User Name" />
                                    {show && errorMessage.username ? <p className='text-danger text-capitalize'>{errorMessage.username}</p> : ''}
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="form-group col-md-6">
                                    <label >Email Address*</label>
                                    <input type="email" name="email" onChange={getInputData} className={`form-control ${show && errorMessage.email ? 'border-danger' : 'border-primary'}`}  placeholder="Enter Email Address" />
                                    {show && errorMessage.email ? <p className='text-danger text-capitalize'>{errorMessage.email}</p> : ''}
                                </div>
                                <div className="form-group col-md-6">
                                    <label >Phone Number*</label>
                                    <input type="text" name="phone" onChange={getInputData}  className={`form-control ${show && errorMessage.phone ? 'border-danger' : 'border-primary'}`}  placeholder="Enter Phone Number" />
                                    {show && errorMessage.phone ? <p className='text-danger text-capitalize'>{errorMessage.phone}</p> : ''}
                                    
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="form-group col-md-6">
                                    <label >Password*</label>
                                    <input type="password" name="password" onChange={getInputData} className={`form-control ${show && errorMessage.password ? 'border-danger' : 'border-primary'}`}  placeholder="Enter password" />
                                    {show && errorMessage.password ? <p className='text-danger text-capitalize'>{errorMessage.password}</p> : ''}
                                    
                                </div>
                                <div className="form-group col-md-6">
                                    <label >Confirm Password*</label>
                                    <input type="password" name="cpassword" className={`form-control border-primary`}  placeholder="Enter Confirm Password" />
                                  
                                </div>
                            </div>
                            <div className="mb-3 mt-3">
                                <button type="submit" className='btn btn-primary'>Sign Up</button>
                            </div>
                        </form>
                        <Link to="/login" className='text-decoration-underline' >Log In</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
