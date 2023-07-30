import React, { Component } from 'react';

export default class RestaurantCreate extends Component {
  constructor()
  {
    super();
    this.state={
      name:null,
      address:null,
      rating:null,
      email:null
    }
  }
  create()
  {
    //console.warn(this.state);
    fetch("http://localhost:4000/restaurant",{
        method: "Post",
        headers:{
          'Content-Type': "application/json"
        },
        body: JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((response)=>{
        alert("Added Successfully");
        
      })
    })
  }
  render() {
    return (
      <div>
        <h1>Restaurant Create</h1>
        <div>
          <input onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Restaurant Name" /><br/><br/>
          <input onChange={(event)=>{this.setState({address:event.target.value})}} placeholder="Restaurant Address" /><br/><br/>
          <input onChange={(event)=>{this.setState({rating:event.target.value})}} placeholder="Restaurant Rating" /><br/><br/>
          <input onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Restaurant Email" /><br/><br/>
          <button onClick={()=>{this.create()}} >Add</button>
        </div>
      </div>
    )
  }
}
