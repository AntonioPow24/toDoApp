
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import React, { useEffect, useState } from 'react'

import Header from './Components/Header'
import TodoCreate from './Components/TodoCreate'
import TodoList from './Components/TodoList'
import TodoComputed from './Components/TodoComputed'
import TodoFilter from './Components/TodoFilter'

const initialStateToDos=JSON.parse(localStorage.getItem('todos')) || []

// Reordenar toDos por el DRAG and DROP
const reorder = (array,startIndex, endIndex) =>{
  const copyArray = [...array] // Copiar de larrayTodos

  // Elemento a mover
  const [itemRemoved] = copyArray.splice(startIndex,1)

  // Elemento reordenado
  copyArray.splice(endIndex,0,itemRemoved)

  //Nueva lista reordenada
  return copyArray
}


export default function App() {

  const [toDos,setToDos]= useState(initialStateToDos)
  const [filter,setFilter]=useState('all') //Filtrado de toDos
  
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(toDos))
  },[toDos])



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



  // Funcion para el DRAG and DROP
  const handleDropDrag = result =>{

    const {destination,source} = result

    if(!destination) return

    if(source.index === destination.index && source.droppableId === destination.droppableId) return

    setToDos(prevTasks => reorder(prevTasks,source.index,destination.index))
  }
  
  return (
    <div className='bg-slate-200 bg-[url("./assets/images/bg-mobile-light.jpg")] bg-no-repeat bg-contain  min-h-screen dark:bg-slate-900 dark:bg-[url("./assets/images/bg-mobile-dark.jpg")] transition-all	duration-500 md:bg-[url("./assets/images/bg-desktop-light.jpg")] dark:md:bg-[url("./assets/images/bg-desktop-dark.jpg")]'>
      
      <Header/>

      <main className='container mx-auto px-5 max-w-2xl'>

        <TodoCreate createToDo={createToDo}/>




      <DragDropContext onDragEnd={handleDropDrag}>

        <TodoList 
          toDos={filteredToDos()} 
          updateToDo={updateToDo}  
          deleteToDo={deleteToDo}
        />

      </DragDropContext>




        <TodoComputed computedToDosLeft={computedToDosLeft} clearCompleted={clearCompleted}/>

        <TodoFilter changeFilter={changeFilter} filter={filter}/>
        
      </main>




      <footer className='text-center text-sm mt-10 dark:text-slate-300 transition-all	duration-500'>
        Drag and Drop
      </footer>
    </div>
  )
}
