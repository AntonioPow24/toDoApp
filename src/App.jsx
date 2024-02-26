
import React, { useState } from 'react'

import Header from './Components/Header'
import TodoCreate from './Components/TodoCreate'
import TodoList from './Components/TodoList'
import TodoComputed from './Components/TodoComputed'
import TodoFilter from './Components/TodoFilter'

const initialStateToDos=[
  {id:1, title:'Estudiar React', completed:true},
  {id:2, title:'Estudiar Angular', completed:false},
  {id:3, title:'Estudiar Vue', completed:false},
  {id:4, title:'Estudiar Tailwind', completed:false},
  {id:5, title:'Estudiar Java', completed:false},
  {id:6, title:'Estudiar SpringBoot', completed:false},
]


export default function App() {

  const [toDos,setToDos]= useState(initialStateToDos)
  const [filter,setFilter]=useState('all') //Filtrado de toDos
  

  // Crear nuevo toDo
  const createToDo = title => {
    const newToDo = {id: Date.now(), title:title.trim(), completed:false }

    setToDos([...toDos,newToDo])
  }

  // Actualizar un toDo
  const updateToDo = id =>{
      const newArrayToDos = toDos.map(toDo => toDo.id === id? {...toDo,completed:!toDo.completed} : toDo)

      setToDos(newArrayToDos)
  }

  // Eliminar un ToDo
  const deleteToDo = id =>{
    const newArrayToDos = toDos.filter(toDo => toDo.id !== id )

    setToDos(newArrayToDos)
  }

  // Contar toDos no completados
  const computedToDosLeft = toDos.filter(toDo => !toDo.completed).length

  // Limpiar todos los toDos Completados
  const clearCompleted = () => {
    const newArrayToDos= toDos.filter(toDo => !toDo.completed)

    setToDos(newArrayToDos)
  }

  // Filtrar los toDos
  const filteredToDos= () => {
    switch (filter) {
      case 'all':
        return toDos
        break;
    
      case 'active':
        return toDos.filter(toDo => !toDo.completed)
        break;
    
      case 'completed':
        return toDos.filter(toDo => toDo.completed)
        break;
    
      default:
        return toDos
        break;
    }
  }

  // Cambiar el filtro(all,active,completed)
  const changeFilter = (newFilter) => setFilter(newFilter)



  return (
    <div className='bg-[url("./assets/images/bg-mobile-light.jpg")] bg-no-repeat bg-contain  min-h-screen dark:bg-slate-900 dark:bg-[url("./assets/images/bg-mobile-dark.jpg")] transition-all	duration-500'>
      
      <Header/>

      <main className='container mx-auto px-5'>

        <TodoCreate createToDo={createToDo}/>

        <TodoList toDos={filteredToDos()} updateToDo={updateToDo}  deleteToDo={deleteToDo}/>
        
        <TodoComputed computedToDosLeft={computedToDosLeft} clearCompleted={clearCompleted}/>

        <TodoFilter changeFilter={changeFilter} filter={filter}/>
        
      </main>




      <footer className='text-center text-sm mt-10 dark:text-slate-300 transition-all	duration-500'>
        Drag and Drop
      </footer>
    </div>
  )
}
