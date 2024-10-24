import React from 'react'
import ListToDo from './ListToDo'
import CreateTodo from './CreateTodo'
import { useSelector } from 'react-redux'

function ToDoContainer() {

  const toDo= useSelector((state) => (state.toDoReducer));
  console.log(toDo);
  return (
    <div>
      <CreateTodo/>
      <ListToDo />
    </div>
  )
}

export default ToDoContainer
