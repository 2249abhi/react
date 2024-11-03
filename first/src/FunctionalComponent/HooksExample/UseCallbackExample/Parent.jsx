import React, { useCallback, useState } from 'react'
import Child from './Child'

/* when parent component render child component always rerender 
if we want conditional rerendering of child component then we can use callcallback
In below example Child we render only in num1 change
*/

export default function Parent() {
    let [num1, setNum1] = useState(1)
    let [num2, setNum2] = useState(101)
    let child  = useCallback(<Child num1={num1} num2={num2} />,[num1])

    console.log('Parent Component Called');
    
  return (
    <>
        <h1>Parent Component</h1>
        <div>Num1= {num1} | Num2= {num2}</div>
        <button onClick={()=>setNum1(num1+1)}>Num1 Increment</button>
        <button onClick={()=>setNum2(num2+1)}>Num2 Increment</button>
        <br/>
        {child}
    </>
  )
}
