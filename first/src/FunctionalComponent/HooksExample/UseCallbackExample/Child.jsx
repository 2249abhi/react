import React from 'react'

export default function Child({num1, num2}) {

    console.log('Child Component Called');
  return (
    <>
    <h1>Child Component</h1>
    <div>Num1= {num1} | Num2= {num2}</div>
    </>
  )
}
