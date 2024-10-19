import React from 'react'
import { useParams, useSearchParams  } from 'react-router-dom'

export default function Profile() {
    // let {name, dsg, salary} = useParams()
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');
    const salary = searchParams.get('salary');
    const dsg = searchParams.get('dsg');
  return (
    <>
    <h1>This Profile Component</h1>
    {name && <h2>Name: {name}</h2>}
    {dsg && <h2>Designation: {dsg}</h2>}
    {salary && <h2>salary: {salary}</h2>}
    </>
  )
}
