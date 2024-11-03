import React,{useContext} from 'react'
import Child3 from './Child3'
import { CounterContext } from './Parent'

export default function Child2() {

  let {state, dispatch} = useContext(CounterContext)

  return (
    <>
    <h2>This is Child2</h2>
    <p>Number= {state.num}</p>
    <button onClick={()=>{dispatch({type:"INC"})}}>Increment</button>
    <button onClick={()=>{dispatch({type:"DEC"})}}>Decrement</button>
    <hr/>
    <Child3/>
    </>
  )
}
