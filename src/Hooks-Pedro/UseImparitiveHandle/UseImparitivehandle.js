import React, { useRef } from 'react'
import Button from './Button'

const UseImparitivehandle = () => {
    const buttonRef = useRef(null)
  return (
    <div className='flex flex-col justify-center items-center '>
        <h1 className='text-4xl font-bold'> UseImparitivehandle</h1>
        <button onClick={buttonRef.current.alterToggle} className='my-5'>Button From Parent</button>
        <Button ref={buttonRef}/>
       
        
    </div>
  )
}

export default UseImparitivehandle