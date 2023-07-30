import React, { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

export default function RestaurantUpdate() {

  const params = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [rating, setRating] = useState('');
  const [email, setEmail] = useState('');

  const update = () => {
   //console.log(address);
    fetch("http://localhost:4000/restaurant/"+params.id,{
        method: "PUT",
        headers:{
          'Content-Type': "application/json"
        },
        body: JSON.stringify({
          id: params.id,
          name: name,
          address: address,
          rating: rating,
          email: email,
        })
    }).then((result)=>{
      result.json().then((response)=>{
        console.log(response);
        alert("updated Successfully");
        navigate("/list");
        
      })
    })
  }

  useEffect(() => {
    fetch("http://localhost:4000/restaurant/"+params.id)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setAddress(data.address);
        setRating(data.rating);
        setEmail(data.email);
        //console.log(data.name);
      });
  }, []);

 
 
  return (
    <div>
        <h1>Restaurant Update</h1>
        <div>
          <input useRef={name} onChange={(e) => {setName(e.target.value)}} defaultValue={name}  placeholder="Restaurant Name" /><br /><br />
          <input useRef={address} onChange={(e) => {setAddress(e.target.value)}} defaultValue={address}  placeholder="Restaurant Address" /><br /><br />
          <input useRef={rating} onChange={(e) => {setRating(e.target.value)}} defaultValue={rating}  placeholder="Restaurant Rating" /><br /><br />
          <input useRef={email}  onChange={(e) => {setEmail(e.target.value)}} defaultValue={email} placeholder="Restaurant Email" /><br /><br />
          <button onClick={update} >Update</button>
        </div>

      </div>
  )
}
/*
import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

export default class RestaurantUpdate extends Component {

 

  render() {
    console.warn(this.props.match.params);
    //console.warn(this.props);
    return (
      <div>
        <h1>Restaurant Update</h1>
        <div>
          <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="Restaurant Name" /><br /><br />
          <input onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder="Restaurant Address" /><br /><br />
          <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder="Restaurant Rating" /><br /><br />
          <input onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder="Restaurant Email" /><br /><br />
          <button onClick={() => { this.create() }} >Update</button>
        </div>

      </div>
    )
  }
}


*/