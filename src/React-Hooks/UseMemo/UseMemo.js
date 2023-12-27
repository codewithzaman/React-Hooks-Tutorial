import React,{useMemo, useState} from 'react'

function UseMemo() {
    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(100);
    const multiplication = useMemo(function multiply(){
        console.log("+_+_+_+_+_+_+");
        return add*10
    },[add])
  return (
    <div>
      <h1>Learn UseMemo Hook</h1>
      {multiplication} <br/>
      <button onClick={()=>setAdd(add+1)}>Add</button>
      <span>{add}</span> <br/>
      <button onClick={()=>setSub(sub-1)}>Sub</button>
      <span>{sub}</span>
    </div>
  )
}

export default UseMemo
