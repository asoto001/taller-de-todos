import React, { useContext, useEffect, useState } from 'react'
import TodoCounter from '../todoCounter/TodoCounter'
import TodoItem from '../todoItem/TodoItem'
import TodoList from '../todoList/TodoList'
import TodoSearch from '../todoSearch/TodoSearch'
import NewTodoBtn from '../NewtodoAndModal/NewTodoBtn'
import './style.scss'
import sun from '../assets/icons/icon-sun.svg'
import moon from '../assets/icons/icon-moon.svg'
import useLocalStorege from '../../hooks/useLocalStorege'
import { TodoProvider } from '../../router/Router'
import Modal from '../NewtodoAndModal/modal/Modal'
import Form from '../NewtodoAndModal/modal/form/Form'

// const todo = [
//   { text: 'cortat algo', completed: true },
//   { text: 'cremar algo', completed: false },
//   { text: 'asar la carne', completed: false }
// ]

const Home = () => {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoProvider);

  const day = false;



  return (
    <>
      <section className='main-sec'>
        <div className='main-sec__div-container'>
          <h2>
            TODO
          </h2>
          {day ? <img src={sun} /> : <img src={moon} />}
        </div>
        <TodoSearch />

      </section>
      <section className='footer-sec'>


        <TodoList>
          {error && <h3>AAAAAAA! la vamos a palmar!...</h3>}
          {loading && <h3>Loading...</h3>}
          {(!loading && !searchedTodos.length) && <h3>Crea tu primer todo</h3>}

          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        
        </TodoList>

        {!!openModal && (
          <Modal>
            <Form />
          </Modal>
        )}
        <NewTodoBtn
          setOpenModal={setOpenModal}
        />
      </section>
    </>
  )
}

export default Home