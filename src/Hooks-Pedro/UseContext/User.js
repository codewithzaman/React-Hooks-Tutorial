import React from 'react'

const User = ({userName}) => {
  return (
    <div>
        <h1 className='text-4xl font-bold'>User: {userName}</h1>
    </div>
  )
}

export default User