import React, { useState } from 'react'

import HeroSection from './Components/HeroSection'
import formValidator from './Validators/formValidator'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

    let [data, setData] = useState({
        username: "",
        password: "",
    })

    let [errorMessage, setErrorMessage] = useState({
        username: "Username field is Mendatory",
        password: "Password field is Mendatory",
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

            let item = res.find((x)=>(x.username === data.username || x.email === data.username) && x.password === data.password)

            if(item) {
                localStorage.setItem("login",true)
                localStorage.setItem("name",item.name)
                localStorage.setItem("email",item.email)
                localStorage.setItem("userid",item.id)
                localStorage.setItem("role",item.role)
                navigate("/admin")
                // if(res.role == "Buyer") {
                //     navigate("/profile")
                // } else {
                //     navigate("/admin")
                // }
                
            } else {

                setShow(true)
                setErrorMessage((old)=>{
                    return {
                        ...old,
                        'username':"Inavlid Username or Password"
                    }
                })
            }


             
                
        }
            

    }

    return (
        <>
            <HeroSection title="Login" />
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-8 col-sm-9 col-11 m-auto">
                        <h5 className='bg-primary text-light p-2 text-center'>Login Account</h5>
                        <form onSubmit={postData}>
                            <div className="row">                                
                                <div className="form-group col-md-12">
                                    <label >User Name*</label>
                                    <input type="text" name="username" onChange={getInputData} className={`form-control ${show && errorMessage.username ? 'border-danger' : 'border-primary'}`}  placeholder="Enter User Name" />
                                    {show && errorMessage.username ? <p className='text-danger text-capitalize'>{errorMessage.username}</p> : ''}
                                </div>
                            </div>
                            
                            <div className="row mt-3">
                                <div className="form-group col-md-12">
                                    <label >Password*</label>
                                    <input type="password" name="password" onChange={getInputData} className={`form-control ${show && errorMessage.password ? 'border-danger' : 'border-primary'}`}  placeholder="Enter password" />
                                    {show && errorMessage.password ? <p className='text-danger text-capitalize'>{errorMessage.password}</p> : ''}
                                    
                                </div>
                            </div>
                            <div className="mb-3 mt-3">
                                <button type="submit" className='btn btn-primary'>Login</button>
                            </div>
                        </form>
                        <div className='d-flex justify-content-between'>
                            <Link to="#" className='text-decoration-underline' >Forget Password</Link>
                            <Link to="/signup" className='text-decoration-underline' >Signup</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
