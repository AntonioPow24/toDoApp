import React from 'react'

export default function TodoComputed({computedToDosLeft,clearCompleted}) {
  return (
    <section className='py-4 px-5 text-slate-400 flex justify-between text-sm bg-white rounded-b-md dark:bg-slate-700 ease-in-out	 duration-500'>
        <span className='dark:text-slate-300 ease-in-out	 duration-500'>{computedToDosLeft} items left</span>
        <button 
          className='text-slate-400 dark:text-slate-300 ease-in-out	 duration-500'
          onClick={clearCompleted}
        >
          Clear completed
        </button>
    </section>

  )
}
