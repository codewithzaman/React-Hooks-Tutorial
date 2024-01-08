import React, { useState } from 'react'

const UseRefWebDevSimplified = () => {
    const [name, setName] = useState('')
  return (
            <div>
                <input type="text" value={name} placeholder='Enter Your name ' onChange={(e)=>setName(e.target.value)}/><br/>
                <div>
                    My name is {name}
                </div>

            </div>
    )
}

export default UseRefWebDevSimplified