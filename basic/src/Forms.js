import React,{useEffect,useState} from 'react'

const Forms = () => {
    //count1 & setCount1 are variables in array
    const [count1,setCount1] = useState(1);
    useEffect(()=>{
        console.warn(count1);
    },[count1==4])
  return (
    <div style={{border: "solid white 4px",margin: "15px 15px 25px 15px"}}>
        <p>Use effect hooks in fun. comp.:- {count1}</p>
        <button onClick={()=>setCount1(count1+1)}>Update State</button>
    </div>
    
  )
}

export default Forms