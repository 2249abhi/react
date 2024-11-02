import React, { useEffect, useState } from 'react'

export default function UseEffectHookExample() {

    let [num1, setNum1] = useState(1)
    let [num2, setNum2] = useState(1)

    useEffect(()=>{
        console.log('setup function is called');
        
    },[num1])
  return (
    <>
        <h1>Use Effect Example</h1>
        <div>Num1= {num1} | Num2= {num2}</div>
        <div className='row'>
            <div className='col-md-12'>
                <button className='col-md-4 btn btn-info text-light' onClick={()=>setNum1(num1+1)} >Num1 Increment</button>
                <button className='col-md-4  btn btn-info text-light' onClick={()=>setNum2(num2+2)} >Num2 Increment</button>
            </div>
        </div>
        <div className='row mt-2'>
            <div className='col-md-12'>
                <button className='col-md-4 btn btn-info text-light' onClick={()=>setNum1(num1-1)} >Num1 Decrement</button>
                <button className='col-md-4  btn btn-info text-light' onClick={()=>setNum2(num2-1)} >Num2 Decrement</button>
            </div>
        </div>
        
    </>
  )
}
