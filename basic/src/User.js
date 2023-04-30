import React from "react";

export default function User(usr)
{
    const red=()=>{
        alert('red function called');
    }

    return (
            <div>
                <h1 onClick={red}>{ usr.text} User (function Component)</h1>
            </div>
    );
    
}