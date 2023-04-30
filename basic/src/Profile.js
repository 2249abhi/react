import React from "react";

export default class Profile extends React.Component{
    constructor()
    {
        super();

    }

    //state
    componentDidMount()
    {
        console.warn('called life cycle');
    }
    
    render()
    {
        return(
            <div>
                <h1>Profile (class component) </h1>
            </div>
        )
    }
}