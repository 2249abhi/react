import React from "react";

export default function User(usr)
{
    const red=()=>{
        alert('red function called');
    }

    function testFun()
    {
        alert('test Fun');
    }

    const testFun1=()=>{
        alert('test Fun 1')
    }

    return (
            <div  style={{border: "solid white 4px",margin: "15px 15px 25px 15px"}}>
                <h4>User FUNCTIONAL Component</h4>
                <br/>
                <h5>Event Handling</h5>
                <button onClick={testFun}>alert1</button>&nbsp;
                <button onClick={testFun1}>alert2</button>
                {/* <h3 onClick={red}>{ usr.text} User (function Component)</h3> */}
                <p><b>Calling functional props:-</b> {usr.text.name} {usr.data}</p>
            </div>
    );
    
}