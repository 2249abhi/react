import React, { Component } from 'react';

export default class Home extends Component {

  constructor()
  {
    super();

    this.state = {
      users:null
    }
  }

  componentDidMount()
  {
    fetch('https://reqres.in/api/users').then((resp)=>{
      resp.json().then((result)=>{
        //console.warn(result.data);
        this.setState({users:result.data})

      })
    })
  }
    
  render() {
    return (
      <div>
        <p>Calling API in console (HOME Page)</p>
        {
          this.state.users ? 
          this.state.users.map((item,i)=>
            <div>
              <p>
                {i+1}. 
                <b>First Name:</b> {item.first_name}, 
                <b>Last Name:</b> {item.last_name},
                <b>Email:</b> {item.email}
              </p></div>
          ) 
          
          : 'test'
        }
      </div>
    )
  }
}
