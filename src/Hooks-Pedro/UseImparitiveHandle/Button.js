import React, { useState } from 'react'

const Button = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <div className='flex flex-col justify-center items-center my-5'>
        <button className='' onClick={()=>setToggle(!toggle)}>Button from Child</button><br/>
        {toggle&&<span>Toggle</span>}
    </div>
  )
}

export default Button