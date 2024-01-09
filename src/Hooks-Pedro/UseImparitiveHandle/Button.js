import React, {forwardRef ,useImperativeHandle,useState } from 'react'

const Button = forwardRef((props,ref) => {
    const [toggle, setToggle] = useState(false);
    useImperativeHandle(ref,()=>({
        alterToggle(){
            setToggle(!toggle)
        }
    }));
  return (
    <div className='flex flex-col justify-center items-center my-5'>
        <button >Button from Child</button><br/>
        {toggle&&<span>Toggle</span>}
    </div>
  )
})

export default Button