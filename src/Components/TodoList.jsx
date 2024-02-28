import React from 'react'
import TodoItem from './TodoItem'
import { Draggable, Droppable } from '@hello-pangea/dnd'


export default function TodoList({toDos,updateToDo,deleteToDo}) {
  return (

    <Droppable droppableId='todos'>
      {droppableProvide =>

        <div 
          className=' rounded-t-md [&>article]:px-5 mt-5 overflow-hidden  dark:bg-slate-700 transition-all duration-500'
          ref={droppableProvide.innerRef}
          {...droppableProvide.droppableProps}
        >
              
              {
              toDos.map((toDo,index) => 
                <Draggable 
                  key={toDo.id} 
                  draggableId={`${toDo.id}`}
                  index={index}
                >

                  {draggableProvide =>

                    <TodoItem 
                      {...draggableProvide.dragHandleProps}
                      {...draggableProvide.draggableProps}
                      deleteToDo={deleteToDo} 
                      updateToDo={updateToDo} 
                      toDo={toDo}
                      ref={draggableProvide.innerRef}

                    />
                  }

                </Draggable>
                )

              }
              
              {droppableProvide.placeholder}
        </div>
      }

      
    </Droppable>
  )
}
