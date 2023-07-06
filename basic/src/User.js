import React from "react";

export default function User(usr)
{
    const red=()=>{
        alert('red function called');
    }

    return (
            <div  style={{border: "solid white 4px",margin: "15px 15px 25px 15px"}}>
                <h4>User FUNCTIONAL Component</h4>
                {/* <h3 onClick={red}>{ usr.text} User (function Component)</h3> */}
                <p><b>Calling functional props:-</b> {usr.text.name} {usr.data}</p>
            </div>
    );
    
}