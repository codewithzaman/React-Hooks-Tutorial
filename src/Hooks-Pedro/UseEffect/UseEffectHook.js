import React, { useEffect, useState } from 'react';
import axios from 'axios';
// 1) useEffect hook is used for handling things outside the scope of React, like manually manipulating the DOM , make an API call, access to localStorage, etc. 
// 2) useEffect hook is also used to keep different states in sync.
// 3) importance of the cleanUp funciton when using useEffect hook, to avoid memory leak on components that are not unmounted by React.
const UseEffectHook = () => {
  const [data, setData] = useState('')
  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
    // console.log(response.data);
    setData(response.data[9].email)

    });  return () => {
      
    }
  }, [])
  
  return (
    <div>
      <h1>UseEffect Hook </h1>
      <p> {data}</p>
    </div>
  )
}

export default UseEffectHook
