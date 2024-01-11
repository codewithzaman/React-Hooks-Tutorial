import React,{useContext} from 'react'
import { AppContext } from './UseContextHook'

function Login() {
  const {setUserName} = useContext(AppContext);

  return (
    <div className='mb-4 mt-4 border border-gray-400'>
        <input type="text" onChange={(event)=>setUserName(event.target.value) }/>
    </div>
  )
}

export default Login