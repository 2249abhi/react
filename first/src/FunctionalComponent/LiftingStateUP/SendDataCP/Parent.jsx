import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {

  let [data, setData] = useState([]);

  // This function will be passed down to the child
  function getData(data) {
    setData(data);//to change state
  }


  return (
    <>
      <h3>This Parent Component</h3>
      <hr />
      {
        data.length ?
          <table cellPadding={10} border={1}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Salary</th>
                <th>City</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item, index) => {
                  return <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.dsg}</td>
                    <td>{item.salary}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
          : ''
      }
      <hr />
      <Child getData={getData} />
    </>
  )

  /* 
    1. The Parent component defines a function (handleDataFromChild) that updates the state based on the data it receives from the child.
    2. This function is passed as a prop (sendDataToParent) to the Child component.
    3. In the Child component, when the button is clicked, the sendDataToParent function is invoked, passing the string "Hello from Child!" back to the parent.

    This allows the child to send data up to the parent when needed. */
}
