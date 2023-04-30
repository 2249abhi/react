import React from "react";

class Profile extends React.Component{
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
export default Profile;