import React, { useContext } from 'react'
import { TodoProvider } from '../../router/Router'
import './style.scss'

const TodoCounter = () => {

  const { totalTodos, completedTodos } = useContext(TodoProvider);

  return (
    <>
      <div className='h2'>
        <h2>completados {completedTodos} de {totalTodos}</h2>
      </div>
    </>
  )
}

export default TodoCounter

