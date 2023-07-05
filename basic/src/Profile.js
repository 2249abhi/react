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
                <h3>{this.props.text.name}</h3>
                <h3>{this.props.data}</h3>
            </div>
        )
    }
}
export default Profile; 