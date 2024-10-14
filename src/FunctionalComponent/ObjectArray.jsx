import React from 'react'

export default function ObjectArray() {

    let arrEmp = [  { id:1001, name:"Abhishek", dsg:"developer", salary:"100000", state:"UP", city:"jhansi"},
                    { id:1002, name:"Rahul", dsg:"Trainer", salary:"5100", state:"MP", city:"gwalior" },
                    { id:1003,
            name:"Vikas",
            dsg:"Teacher",
            salary:"540000",
            state:"Delhi",
            city:"New Delhi"
        },
        {
            id:1004,
            name:"Jitendra",
            dsg:"Student",
            salary:"1000",
            state:"Hayana",
            city:"gurugram"
        },
        {
            id:1005,
            name:"Rajendra",
            dsg:"Doctor",
            salary:"500000",
            state:"kernataka",
            city:"banglore"
        }
    ];


  return (
    <>
    <h3>Object Array Component loop</h3>
        <table border={1} cellPadding={10}>
            <thead>
                <tr>
                    <th>Id</th><th>Name</th><th>Designation</th><th>Salary</th><th>State</th><th>City</th>
                </tr>
            </thead>
            <tbody>
                {arrEmp.map((item, index)=>{
                    return <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.dsg}</td>
                        <td>{item.salary}</td>
                        <td>{item.state}</td>
                        <td>{item.city}</td>
                    </tr>
                })}
                
            </tbody>
        </table>
    </>
  )
}
