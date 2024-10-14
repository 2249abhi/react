import React from 'react'
import Child from './Child'

export default function Parent() {
  return (
    <>
        <h3>Send Data from Parent Component to Child Component</h3>
        <h4>This is Parent Component</h4>
        <hr/>
        {/* passing data from parent to child */}
        <Child name="Abhishek Shrivastav" dsg="Developer" salary={100000} />
        <hr/>
        <Child name="Rahul kumar" dsg="Student" salary={5400} />
        <hr/>
        <Child name="Ganesh thakur" dsg="Trainer" salary={100} />
        <hr/>
        <Child name="Rajendra Sharma" dsg="Docter" salary={16000} />
        <hr/>
        <Child name="Kunal khare" dsg="Worker" salary={340000} />
        <hr/>
        <Child name="Raja Kumar" dsg="Farmer" salary={45000} />
    </>
    
  )
}
