import React,{useState,useRef} from 'react'

function UseRef() {
    const [myNum, setmyNum] = useState(0);
    const getNumBox = ()=>{
        console.log('Hello');
        console.log(inputOne.current);
    }
    const getTextBox = ()=>{
        console.log('World');
        console.log(inputTwo.current);
    }
    const inputOne = useRef()
    const inputTwo = useRef()
  return (
    <div>
      <h1>UseRef Hook</h1>
    <input 
    ref={inputOne}
    type="number" 
    value={myNum}
    onChange={(e)=>setmyNum(e.target.value)}
    />
    <input 
    ref={inputTwo}
    type="text" 
    value={myNum}
    onChange={(e)=>setmyNum(e.target.value)}
    />
    <h3>Value is : {myNum}</h3>
    <button onClick={()=> getNumBox()}>Rupees</button>
    <button onClick={()=> getTextBox()}>Dollars</button>
    </div>
  )
}

export default UseRef
