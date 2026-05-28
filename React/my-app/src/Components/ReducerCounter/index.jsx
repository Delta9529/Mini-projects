import React, { useReducer } from 'react'

const reducerFunction = (state,action) => {
    switch(action.type) {
        case 'increment': return {count: state.count + 1};
        case 'decrement' : return {count: state.count - 1};
        default : return state;
    }
 }

export const ReducerCounter = () => {
 const [state, dispatch] = useReducer(reducerFunction, {count:0})

  return (
    <>
        <div className="container">
            <h1>Counter - Using useReducer hook</h1>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({type : 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type : 'decrement'})}>Decrement</button>
        </div>
    </>
  )
}
