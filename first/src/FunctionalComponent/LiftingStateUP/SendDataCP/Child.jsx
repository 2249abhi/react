import React from 'react'

export default function Child({ getData }) {

  let data = [
    { id: 1001, name: "Abhishek", dsg: "developer", salary: "100000", state: "UP", city: "jhansi" },
    { id: 1002, name: "Rahul", dsg: "Trainer", salary: "5100", state: "MP", city: "gwalior" },
    { id: 1003, name: "Vikas", dsg: "Teacher", salary: "540000", state: "Delhi", city: "New Delhi" },
    { id: 1004, name: "Jitendra", dsg: "Student", salary: "1000", state: "Hayana", city: "gurugram" },
    { id: 1005, name: "Rajendra", dsg: "Doctor", salary: "500000", state: "kernataka", city: "banglore" }
  ];
  function sendData() {
    getData(data)
  }

  return (
    <>
      <h3>This is Child Component</h3>
      <button onClick={sendData}>Send Data to Parent</button>
    </>

  )
}
