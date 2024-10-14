import React,{useState} from "react";

export default function StateExample() {

    //let num = 1;//to change state must use use state function

   let [num,updateNum] = useState(1)

    // function increment() {
    //     updateNum(num + 1)
    //     //num++;
    //     //console.log(num);
        
    // }

    // function decrement() {
    //     updateNum(num - 1)
    //     //num--;
    //     //console.log(num);
        
    // }

    return (
        <>
        <h1>Functional Component State Example</h1>
        <p>Number: {num}</p>
        {/* <button onClick={()=>increment()}>Increment</button>&nbsp;
        <button onClick={()=>decrement()}>Decrement</button> */}
        <button onClick={()=>updateNum(num+1)}>Increment</button>&nbsp;
        <button onClick={()=>updateNum(num-1)}>Decrement</button>
        </>
    )
}