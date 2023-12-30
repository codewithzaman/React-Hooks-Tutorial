import React, { useState } from 'react'

const UseStateHook = () => {
    const [counter, setCounter] = useState(0);
    const [inputvalue, setInputvalue] = useState('Nader')
    const increment = ()=>{
        setCounter(counter+1)
    }
    const decrement =()=>{
        setCounter(counter-1)
    }
  return (
    <div>
      <h1>Use State Hook Counter </h1>
      <button onClick={increment}>Increment </button>
      {" "}
      {counter}
      {" "}
      <button onClick={decrement}>Decrement</button>
      <div>
        <h1>UseState Hook Input Field</h1>
        <div>
            <input type="text" placeholder='Enter your Name here' 
            onChange ={(e) => setInputvalue (e.target.value)}
            />
            {inputvalue}
        </div>

      </div>
    </div>
  )
}

export default UseStateHook
