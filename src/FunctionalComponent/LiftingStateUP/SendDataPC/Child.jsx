import React from 'react'

export default function Child({name,dsg,salary}) {
    return (
      <>
          <h3>This is Child Component</h3>
          <p>Name: <b>{name}</b>, Designation: <b>{dsg}</b>, Salary: <b>{salary}</b></p>
      </>
    )
  }

// export default function Child(props) {
//   return (
//     <>
//         <h3>This is Child Component</h3>
//         <p>Name: <b>{props.name}</b>, Designation: <b>{props.dsg}</b>, Salary: <b>{props.salary}</b></p>
//     </>
//   )
// }
