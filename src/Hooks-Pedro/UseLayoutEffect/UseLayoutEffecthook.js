import React, { useEffect, useLayoutEffect } from 'react';
// If we use both hooks Useeffect and uselayouteffect at the same time then uselayouteffect will render first


const UseLayoutEffecthook = () => {
    useLayoutEffect(() => {
        console.log('UseLayoutEffect');
    
    },[] )
    useEffect(() => {
     console.log('UseEffect ');
    }, [])
    
  return (
    <div>

    </div>
  )
}

export default UseLayoutEffecthook