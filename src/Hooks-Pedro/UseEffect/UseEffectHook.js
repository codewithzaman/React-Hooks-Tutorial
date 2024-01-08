import React, { useEffect, useState } from 'react';
import axios from 'axios';
// 1) useEffect hook is used for handling things outside the scope of React, like manually manipulating the DOM , make an API call, access to localStorage, etc. 
// 2) useEffect hook is also used to keep different states in sync.
// 3) importance of the cleanUp funciton when using useEffect hook, to avoid memory leak on components that are not unmounted by React.
const UseEffectHook = () => {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0)
  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
    // console.log(response.data);
    setData(response.data[9].email);
    console.log("API was called");

    });  return () => {
      
    }
  }, [])
  
  return (
    <div className='flex flex-col justify-center items-center bg-black text-white'>
      <h1 className='mt-6'>UseEffect Hook </h1>
      <h3 className='mt-4'>{data}</h3><br/>
      <h2 className='text-4xl font-semibold'>{count}</h2><br/>
      <button onClick={()=>setCount(count+1)}>Count</button>

    </div>
  )
}

export default UseEffectHook
