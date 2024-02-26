import React from 'react'

export default function TodoFilter({changeFilter,filter}) {
  return (
    <section className='container mx-auto mt-5'>
        <div className='bg-white flex gap-4 justify-center px-5 py-4 rounded-md text-sm dark:bg-slate-700 transition-all	duration-500'>
          <button 
            className={`transition-all	duration-500 ${filter === 'all'? 'text-blue-500' : 'text-gray-400 hover:text-blue-500 dark:text-slate-300'} `}
            onClick={()=> changeFilter('all')}
          > 
            All
          </button>

          <button 
            className={`transition-all	duration-500 ${filter === 'active'? 'text-blue-500' : 'text-gray-400 hover:text-blue-500 dark:text-slate-300'}`}
            onClick={()=> changeFilter('active')}
          >
            Active
          </button>

          <button 
            className={`transition-all	duration-500 ${filter === 'completed'? 'text-blue-500' : 'text-gray-400 hover:text-blue-500 dark:text-slate-300'}`}
            onClick={()=> changeFilter('completed')}
          >
            Completed
          </button>
        </div>
  </section>
  )
}
