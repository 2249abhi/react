import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profile() {
    let {name, dsg, salary} = useParams()
  return (
    <>
    <h1>This Profile Component</h1>
    {name && <h2>Name: {name}</h2>}
    {dsg && <h2>dsg: {dsg}</h2>}
    {salary && <h2>salary: {salary}</h2>}
    </>
  )
}
