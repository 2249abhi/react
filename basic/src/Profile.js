import React from "react";

class Profile extends React.Component{
    constructor()
    {
        super();
        // this.state = {
        //     show:true
        // }
        //define state
        this.state = {
            name: 'abhi',
            email: 'abhi@mail.com' ,
            count: 0,
            show:true,
            surname:null
        }

    }

    updateState()
    {
        this.setState({
            name:'Bruce',
            count: this.state.count+1
        })
    }

    revertState()
    {
        this.setState({
            name:'abhi',
            count:this.state.count-1
        })
    }

    //state
    componentDidMount()
    {
        //it is called just after component is ready with html
        /*
            1. call your api here instead of constructor 
                because it is called after component is ready with html
        */ 
        console.warn('componentDidMount');
        

    }

    componentDidUpdate()
    {
        //it is called after state update
        console.warn('componentDidUpdate');

        //state in componentDidUpdate cannot be updated without condition
        if(this.state.surname == null)
        {
            console.warn('componentDidUpdate with condition');
            this.setState({surname:"shrivastav"})
        }
        
    }

    componentWillUnmount()
    {
        console.warn('componentWillUnmount');
        //alert('componentWillUnmount');
    }

    testFun()
    {
        alert('test alert');
    }
    
    render()
    {
        //no logical work will be here of any element
        return(
            <div style={{border: "solid white 4px"}}>
                <h4>Profile CLASS Component</h4>
                <p><b>Calling class props:-</b> {this.props.text.name} {this.props.data}</p>
                <p><b>Calling class State:-</b> {this.state.name} {this.state.surname} {this.state.count} {this.state.email}</p>
                <button onClick={()=>this.updateState()}>Update Name and increase count</button>&nbsp;
                <button onClick={()=>this.revertState()}>Revert Name and decrease count</button>
                <br/>
                <h5>Event Handling</h5>
                <button onClick={()=>{this.testFun()}} >alert1</button>&nbsp;
                <button onClick={this.testFun.bind()} >alert2</button>
                <br/>
                    {/* hide and show functionality */}
                 {
                    this.state.show ? <h5>Hide and show</h5> : null
                }
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Click me</button>
            </div>
        )
    }
}
export default Profile; 