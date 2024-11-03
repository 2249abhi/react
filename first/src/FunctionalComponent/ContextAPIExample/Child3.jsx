import React, {useContext} from 'react'
import Child4 from './Child4'
import { NameContext, DesignationContext, SalaryContext } from './Parent'
export default function Child3() {
    let name = useContext(NameContext)
    let dsg = useContext(DesignationContext)
    let salary = useContext(SalaryContext)
  return (
    <>
    <h2>This is Child3</h2>
    <h3>Name: {name}</h3>
    <h3>Designation: {dsg}</h3>
    <h3>Salary: {salary}</h3>
    <hr/>
    <Child4/>
    </>
  )
}
