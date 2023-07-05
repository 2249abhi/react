import React from "react";

export default function User(usr)
{
    const red=()=>{
        alert('red function called');
    }

    return (
            <div>
                {/* <h3 onClick={red}>{ usr.text} User (function Component)</h3> */}
                <h3>{usr.text.name}</h3>
                <h3>{usr.data}</h3>
            </div>
    );
    
}