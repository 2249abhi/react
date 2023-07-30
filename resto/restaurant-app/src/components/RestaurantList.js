import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null
    }


  }
  componentDidMount() {
    fetch("http://localhost:4000/restaurant").then((response) => {

      response.json().then((res) => {

        this.setState({ list: res });
      });
    });
  }

  delete(id)
  {
    //alert('success '+ id);
    fetch("http://localhost:4000/restaurant/"+id,{
      method: "DELETE"
    }).then((result)=>{
      result.json().then((response)=>{
        alert("Restaurant Detail has been deleted.");
      })
    })
  }
  render() {
    //console.warn(this.state);
    return (
      <div>
        <h1>RestaurantList</h1>
        {
          this.state.list ?
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.list.map((item, i) =>
                      <tr>
                        <td>{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.rating}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>
                        <td><Link to={"/update/"+item.id}>Edit</Link> <a onClick={()=>this.delete(item.id)} href='#'>Delete</a></td>
                      </tr>
                    )
                  }
                </tbody>
              </Table>
            </div>
            : <p>Loading</p>
        }
      </div>
    )
  }
}
