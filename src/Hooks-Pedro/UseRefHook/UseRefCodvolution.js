import React, { useRef } from 'react';
// useRef handle the color, focus and value in functional component.

const UseRefCodvolution = () => {
    const inputRef = useRef(null)
  return (
    <div>
        UseRefCodvolution
        <input type="text" ref={inputRef} />
        </div>
  
  )
}

export default UseRefCodvolution