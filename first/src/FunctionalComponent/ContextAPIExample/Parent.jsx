import React, { createContext } from 'react'
import Child1 from './Child1'

export const NameContext = createContext()
export const DesignationContext = createContext()
export const SalaryContext = createContext()

export default function Parent() {
  return (
    <>
        <h2>This Parent Component</h2>
        <hr />
        {/* <Child1/> */}
        <NameContext.Provider value="Abhishek Shrivastav">
            <DesignationContext.Provider value="Developer">
                <SalaryContext.Provider value={100000}>
                <Child1/>
                </SalaryContext.Provider>
            </DesignationContext.Provider>
        </NameContext.Provider>
        
    </>
  )
}
