import React, { useState } from 'react'

export default function InputExample() {
    let [data, setData] = useState({
        name:"",
        email:"",
        phone:"",
        designation:"",
        salary:"",
        city:"",
        state:"",
    })
    function getInputData(e) {
       var {name, value} = e.target

       setData((old)=>{
        return {
            ...old,
            [name]: value
        }
       })
    }

    function postData() {
        // alert("Hello "+name);
        // alert(`Hello ${name}`)
        alert(`
            Name    : ${data.name}
            Email    : ${data.email}
            Phone    : ${data.phone}
            Designation    : ${data.designation}
            Salary    : ${data.salary}
            City    : ${data.city}
            State    : ${data.state}
            `)
    }
  return (
    <div className='main'>
        <div className='center'>
            <h3>Functional component Input Example</h3>
            <h4>Name: {data.name}</h4>
            <h4>Email: {data.email}</h4>
            <h4>Phone: {data.phone}</h4>
            <h4>Designation: {data.designation}</h4>
            <h4>Salary: {data.salary}</h4>
            <h4>City: {data.city}</h4>
            <h4>State: {data.state}</h4>
            <input type='text' name="name" onChange={getInputData} placeholder='Full Name' /><br/>
            <input type='email' name="email" onChange={getInputData} placeholder='Email Address' /><br/>
            <input type='number' name="phone" onChange={getInputData} placeholder='Phone Number' /><br/>
            <input type='text' name="designation" onChange={getInputData} placeholder='Designation' /><br/>
            <input type='number' name="salary" onChange={getInputData} placeholder='Salary' /><br/>
            <input type='text' name="city" onChange={getInputData} placeholder='City' /><br/>
            <input type='text' name="state" onChange={getInputData} placeholder='State' /><br/>
            <button onClick={postData}>Submit</button>
        </div>
    </div>
  )
}
