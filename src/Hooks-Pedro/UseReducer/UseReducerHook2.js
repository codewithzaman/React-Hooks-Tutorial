import React, { useReducer } from "react";
const initialstate = {
  count: 0,
  showText: true,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};
const UseReducerHook2 = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
  <div >
  <h1>{state.count}</h1>
  <button 
  onClick={()=>{
    dispatch({type:'INCREMENT'});
    dispatch({type:'toggleShowText'})

  }}
  >
    Click Here
  </button>
  {state.showText&& <p>This is a text</p>}
</div>
)
  ;
};

export default UseReducerHook2;
