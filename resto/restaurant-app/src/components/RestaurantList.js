import React, { Component } from 'react'

export default class RestaurantList extends Component {
  constructor()
  {
    super();
    this.state={
      list:null
    }
  }
  componentDidMount()
  {
    fetch("http://localhost:3000/restaurant").then((response)=>{

      response.json().then((res)=>{
       
        this.setState({list:res});
      });
    });
  }
  render() {
    console.warn(this.state);
    return (
      <div>
        <h1>RestaurantList</h1>
        {
          this.state.list ? 
          
          this.state.list.map((item,i)=>
          <div>{item.name}</div>
          )
          
          : <p>Loading</p>
        }
      </div>
    )
  }
}
