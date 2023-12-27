import React,{memo} from 'react'

function Todos({todo,addNewTodo}) {
    console.log('Todo List Render');
  return (
    <div>
      <h1>Todo List</h1>
    </div>
  )
}

export default memo(Todos)
