import React from "react";

export default function User(usr)
{
    const red=()=>{
        alert('red function called');
    }

    return (
            <div>
                <h4>User FUNCTIONAL Component</h4>
                {/* <h3 onClick={red}>{ usr.text} User (function Component)</h3> */}
                <p><b>Calling functional props:-</b> {usr.text.name} {usr.data}</p>
            </div>
    );
    
}