import React, { useRef } from 'react';
// useRef handle the color, focus and value in functional component.

const UseRefCodvolution = () => {
    const inputRef = useRef(null);
    const HandleInput = ()=>{
console.warn('Function called');
// inputRef.current.value = "1000";
// inputRef.current.focus();
// inputRef.current.style.color = "red"
inputRef.current.style.display = "none"
    }
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl'>UseRefCodvolution</h1>
        <input type="text" ref={inputRef} className='border-gray-400 border my-4' />
        <button onClick={HandleInput}>Handle input</button>
        </div>
  
  )
}

export default UseRefCodvolution