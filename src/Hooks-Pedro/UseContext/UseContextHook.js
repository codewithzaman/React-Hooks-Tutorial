import React from 'react';
import Login from './Login';
import User from './User';


function UseContextHook() {
    const [userName, setUserName] = useState('')
  return (
    <div>
        <h1>UseContextHook</h1>
        <Login setUserName={setUserName}/>
        <User userName={userName}/>

    </div>
  )
}

export default UseContextHook