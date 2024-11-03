import React, { useContext } from 'react'
import Child2 from './Child2'
import { CounterContext } from './Parent'

export default function Child1() {

  let {state, dispatch} = useContext(CounterContext)

  return (
    <>
    <h2>This is Child1</h2>
    <p>Number= {state.num}</p>
    <button onClick={()=>{dispatch({type:"INC"})}}>Increment</button>
    <button onClick={()=>{dispatch({type:"DEC"})}}>Decrement</button>
    <hr/>
    <Child2/>
    </>
  )
}
