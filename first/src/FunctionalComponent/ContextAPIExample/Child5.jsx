import React from 'react'
import { DesignationContext, NameContext, SalaryContext } from './Parent'


export default function Child5() {
  return (
    <>
    <h2>This is Child5</h2>
    <NameContext.Consumer>
        {(data)=>{
            return <h2>Name: {data}</h2>
        }}
    </NameContext.Consumer>
    <DesignationContext.Consumer>
        {(data)=>{
            return <h2>Name: {data}</h2>
        }}
    </DesignationContext.Consumer>
    <SalaryContext.Consumer>
        {(data)=>{
            return <h2>Name: {data}</h2>
        }}
    </SalaryContext.Consumer>
    </>
  )
}
