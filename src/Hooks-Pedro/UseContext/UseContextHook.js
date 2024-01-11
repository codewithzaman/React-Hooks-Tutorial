import React, { useState,createContext } from 'react';
import Login from './Login';
import User from './User';
const AppContext = createContext(null);

function UseContextHook() {
    const [userName, setUserName] = useState('')
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1>UseContextHook</h1>
        <Login />
        <User />

    </div>
  )
}

export default UseContextHook