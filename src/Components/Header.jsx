import React, { useEffect, useRef, useState } from 'react'
import IconMoon from './icons/IconMoon'
import IconSun from './icons/IconSun'

// Devuelve si es Dark o No
const initialStateThemeDark = localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark'


export default function Header() {

  const [darkMode,setDarkMode] = useState(initialStateThemeDark)


  const refHeader = useRef(null) //siempre partaria en null


  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme','dark')
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme','light')
    }
  },[darkMode])





  return (
    <header className='container mx-auto px-5 pt-8 max-w-2xl' ref={refHeader}> 
    {/* se pone un ref en el elemento que deseamos, y se usa su .current para acceder */}
        <div className='flex justify-between'>
        <h1 className='uppercase text-white text-3xl font-semibold tracking-[0.35em]'>Todo</h1>
        <button onClick={()=> setDarkMode(!darkMode)}>
            {
              darkMode? <IconSun/> : <IconMoon/>
            }
        </button>
        </div>
    </header>
  )
}
