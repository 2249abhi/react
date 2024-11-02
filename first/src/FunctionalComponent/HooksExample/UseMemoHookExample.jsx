import React,{ useMemo, useState} from 'react'

function calculate(num) {

    let sum = 0;
    for(let i=0;i<=1000000000;i++) {
        sum = sum+i;
    }
    return sum;
}

export default function UseMemoHookExample() {
  
    let [num1, setNum1] = useState(1)
    let [num2, setNum2] = useState(1)
    // let sum = calculate(num2)
    let sum = useMemo(()=>calculate(num2),[num2])

  return (
    <>
        <h1>Use Memo Example</h1>
        <div>Num1= {num1} | Num2= {num2}</div>
        <div>Sum= {sum}</div>
        <div className='row'>
            <div className='col-md-12'>
                <button className='col-md-4 btn btn-info text-light' onClick={()=>setNum1(num1+1)} >Num1 Increment</button>
                <button className='col-md-4  btn btn-info text-light' onClick={()=>setNum2(num2+1)} >Num2 Increment</button>
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
