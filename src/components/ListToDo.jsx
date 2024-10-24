import React from 'react'

function ListToDo() {

    const list =[
        {
            id: 1,
            title: "Learn React",
            // completed: false
        },
        {
            id: 2,
            title: "Learn Redux",
            // completed: false
        }
    ]
  return (
    <div>
      <h1>List ToDo</h1>

      <ul>
        {list.map((item) => (
            <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListToDo
