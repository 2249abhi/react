// import React, { useState } from 'react'
import React, { useRef } from 'react'

//usestate will rerender component each time when we fill input to render only one time we useref
export default function UseRefExample() {
    // let [name, setName] = useState("")
    let name = useRef("")
    console.log('component render');
    
  return (
    <>
    <h1>UseRef Example</h1>
    <input type="text" name="name" onChange={(e)=>name.current = e.target.value} id="name" />
    <button onClick={()=>alert(`Hello ${name.current}`)}>Submit</button>
    {/* <input type="text" name="name" onChange={(e)=>setName(e.target.value)} id="name" />
    <button onClick={()=>alert(`Hello ${name}`)}>Submit</button> */}
    </>
  )
}
