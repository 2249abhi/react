import React, { createContext, useReducer } from 'react'
import reducer from './Reducer'
import Child1 from './Child1'

//reducer is used to update global state
export const CounterContext = createContext()

export default function Parent() {

  let [state, dispatch] = useReducer(reducer,{num:1})
  return (
    <>
        <h2>This Parent Component</h2>
        <p>Number: {state.num}</p>
        <button onClick={()=>{dispatch({type:"INC"})}}>Increment</button>
        <button onClick={()=>{dispatch({type:"DEC"})}}>Decrement</button>
        <hr />
        <CounterContext.Provider value={{state,dispatch}}>
          <Child1/>
        </CounterContext.Provider>
    </>
  )
}
