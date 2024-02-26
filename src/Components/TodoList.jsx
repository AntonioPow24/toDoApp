import React from 'react'
import TodoItem from './TodoItem'


export default function TodoList({toDos,updateToDo,deleteToDo}) {
  return (
    <div className=' rounded-t-md [&>article]:px-5 mt-5 overflow-hidden  dark:bg-slate-700 transition-all duration-500'>
          
          {
          toDos.map(toDo => <TodoItem deleteToDo={deleteToDo} updateToDo={updateToDo} key={toDo.id} toDo={toDo}/>)
          }
          
    </div>
  )
}
