import React from 'react'
import IconCross from './icons/IconCross'
import IconCheck from './icons/IconCheck'

export default function TodoItem({toDo,updateToDo,deleteToDo}) {

  const {title,completed,id}=toDo

  const buttonStyle = completed? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center' 
  : 'inline-block'

  const titleStyle = completed && 'line-through'


  return (
    <article className='bg-white flex items-center gap-4 py-4 border-b-slate-300   border-b dark:bg-slate-700 dark:border-b-slate-500 transition-all	duration-500'>

        <button
          className={`rounded-full w-5 h-5 border border-slate-300 dark:border-slate-500  ${buttonStyle} transition-all	duration-500`} 
          onClick={()=> updateToDo(id)}
        >
          {completed && <IconCheck/>}
        </button>

        <p 
          className={`text-slate-600 grow text-sm dark:text-slate-300 ${titleStyle} transition-all	duration-500`}
        >
          {title}
        </p>
        <button  
          className='flex-none '
          onClick={() => deleteToDo(id)}
        >
            <IconCross/>
        </button>
    </article>
  )
}
