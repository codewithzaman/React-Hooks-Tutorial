// What is UseReducer Hook ??
// UserReducer is a hook used for state management 
// Alternative of useState() Hook .
// Syntax 
// Const [state,dispatch] = useReducer(reducer,initialState)
// reducer(currentState,action)
// What is reducer ??
 // Reducer is a function that accepts two parameters.
 // newState = reducer(currentState,action)
import React, { useReducer } from 'react'
const initialState = 0;
const reducer =(state,action)=>{
    switch(action){
        case "Increment" : 
        return state+1
        case "Decrement" :
            return state-1
         default:
            return state   
    }
}
function UseReducer() {
    const [count, dispatch] = useReducer(reducer,initialState)
  return (
    <div>
       <div>{count}</div><br/>
      <button onClick={dispatch("Increment")}>Increment</button>
      <button onClick={dispatch("Decrement")}>Decrement</button>
    </div>
  )
}

export default UseReducer
