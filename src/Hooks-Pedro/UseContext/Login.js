import React from 'react'

function Login() {
  return (
    <div className='mb-4 mt-4 border border-gray-400'>
        <input type="text" onChange={(event)=>(event.target.value) }/>
    </div>
  )
}

export default Login