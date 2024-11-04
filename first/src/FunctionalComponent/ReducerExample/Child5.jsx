import React, {useContext} from 'react'

import { CounterContext } from './Parent'

export default function Child5() {

  let {state, dispatch} = useContext(CounterContext)

  return (
    <>
    <h2>This is Child5</h2>
    <h3>Num= {state.num}</h3>
    <button onClick={()=>{dispatch({type:"INC"})}}>Increment</button>
    <button onClick={()=>{dispatch({type:"DEC"})}}>Decrement</button>
    <hr/>
    </>
  )
}
