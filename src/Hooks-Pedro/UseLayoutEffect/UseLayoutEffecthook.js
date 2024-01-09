import React, { useEffect, useLayoutEffect, useRef } from 'react';
// If we use both hooks Useeffect and uselayouteffect at the same time then uselayouteffect will render first


const UseLayoutEffecthook = () => {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    
    },[] )
    useEffect(() => {
    //  console.log('UseEffect ');
        inputRef.current.value="Hello" ;
}, [])
    
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-semibold mb-3'>UselayouEffect Hook</h1>
        <input type="text" ref={inputRef} value='Pedro' className='text-2xl border rounded-md w-[300px] h-[50px] ' />
    </div>
  )
}

export default UseLayoutEffecthook