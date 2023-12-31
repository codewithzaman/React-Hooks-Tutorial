import React from 'react'
// 1) useEffect hook is used for handling things outside the scope of React, like manually manipulating the DOM , make an API call, access to localStorage, etc. 
// 2) useEffect hook is also used to keep different states in sync.
// 3) importance of the cleanUp funciton when using useEffect hook, to avoid memory leak on components that are not unmounted by React.
const UseEffectHook = () => {
  return (
    <div>
      <h1>UseEffect Hook </h1>
    </div>
  )
}

export default UseEffectHook
