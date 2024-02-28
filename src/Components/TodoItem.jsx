import React from 'react'
import IconCross from './icons/IconCross'
import IconCheck from './icons/IconCheck'

const TodoItem = React.forwardRef(({toDo,updateToDo,deleteToDo, ...props},ref) =>{

  const {title,completed,id}=toDo

  const buttonStyle = completed? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center' 
  : 'inline-block'

  const titleStyle = completed && 'line-through'


  return (
    <article  ref={ref} className='bg-white flex items-center gap-4 py-4 border-b-slate-300   border-b dark:bg-slate-700 dark:border-b-slate-500 transition-colors	duration-500' {...props}>

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
})

export default TodoItem