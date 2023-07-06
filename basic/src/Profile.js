import React from "react";

class Profile extends React.Component{
    constructor()
    {
        super();
        //define state
        this.state = {
            name: 'abhi',
            email: 'abhi@mail.com' ,
            count: 0
        }

    }

    updateState()
    {
        this.setState({
            name:'Bruce',
            count: this.state.count+1
        })
    }

    //state
    componentDidMount()
    {
        console.warn('called life cycle');
    }
    
    render()
    {
        return(
            <div style={{border: "solid white 4px"}}>
                <h4>Profile CLASS Component</h4>
                <p><b>Calling class props:-</b> {this.props.text.name} {this.props.data}</p>
                <p><b>Calling class State:-</b> {this.state.name} {this.state.count} {this.state.email}</p>
                <button onClick={()=>this.updateState()}>Update Name and count</button>
            </div>
        )
    }
}
export default Profile; 