import React,{useState,useCallback} from 'react'
import Todos from './Todos'

function UseCallBack() {
    const [count, setcount] = useState(0)
    const [todo, settodo] = useState([])
    // const addNewTodo = ()=>{
    //     console.log('Add new todo');
    // }
    const addNewTodo = useCallback(() => {
        console.log('Add new Todo');
      },[todo]
    )
    
  return (
    <div>
      <h1>UseCallBack Hook </h1>
      <Todos todo={todo} addNewTodo={addNewTodo}/>
      <h3>Count Value is =  {count}</h3>
      <button onClick={()=>setcount(count+1)}>Increment</button>
    </div>
  )
}

export default UseCallBack
