import React, { useState } from 'react'

export default function TodoCreate({createToDo}) {

  const [title,setTitle]=useState('')

  // Enviar Form
  const handleSubmitAddToDo = e =>{
    e.preventDefault()

    // Prevenir cadena vacia
    if(!title.trim()) return setTitle('')

    
    createToDo(title)
    setTitle('')
  }

  return (
    <form 
        className='bg-white rounded-md overflow-hidden py-4 px-5 flex gap-4 mt-8 items-center dark:bg-slate-700 transition-all	duration-500'
        onSubmit={handleSubmitAddToDo}
    >
        <span className='rounded-full w-5 h-5 border-2'></span>

        <input 
              className='text-sm w-full border-none text-gray-500 outline-none dark:text-slate-300 dark:bg-slate-700 transition-all duration-500' 
              type="text" 
              placeholder='Create a new todo..'
              value={title}
              onChange={e => setTitle(e.target.value)} 
        />
    </form>
  )
}
