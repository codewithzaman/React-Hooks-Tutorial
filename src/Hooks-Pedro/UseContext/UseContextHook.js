import React, { useState,createContext } from 'react';
import Login from './Login';
import User from './User';
export const AppContext = createContext(null);

function UseContextHook() {
    const [userName, setUserName] = useState('')
  return (
    <div className='flex flex-col justify-center items-center'>
        <AppContext.Provider value={{userName,setUserName}}>
        <Login />
        <User />
        </AppContext.Provider>
        

    </div>
  )
}

export default UseContextHook