import React from 'react'

const UseRefHook = () => {
  return (
    <div className='flex flex-col justify-center items-center  '>
        <h1 className='text-4xl underline'>UseRefHook</h1> <br/>
        <h1 className='text-3xl font-semibold'>Nader</h1>
        <input className='border-2 border-gray-400 rounded my-4' type="text" placeholder='Enter Your Name'/>
        <button>Change Name</button>
    </div>
  )
}

export default UseRefHook