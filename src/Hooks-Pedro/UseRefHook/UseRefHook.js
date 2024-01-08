import React from 'react'
import { useRef } from 'react'
//The useRef is a hook that allows to directly create a reference to the DOM element in the functional component

const UseRefHook = () => {
    const inputRef = useRef(null);
    const handleChange=()=>{
        // console.log(inputRef.current.value);
        inputRef.current.focus()
    }
  return (
    <div className='flex flex-col justify-center items-center  '>
        <h1 className='text-4xl underline'>UseRefHook</h1> <br/>
        <h1 className='text-3xl font-semibold'>Nader</h1>
        <input className='border-2 border-gray-400 rounded my-4' type="text" placeholder='Enter Your Name' ref={inputRef}/>
        <button onClick={handleChange}>Change Name</button>
    </div>
  )
}

export default UseRefHook