import React, { useEffect, useState } from 'react'
import TodoCounter from '../todoCounter/TodoCounter'
import TodoItem from '../todoItem/TodoItem'
import TodoList from '../todoList/TodoList'
import TodoModal from '../todoModal/TodoModal'
import TodoSearch from '../todoSearch/TodoSearch'
import './style.scss'
import sun from '../assets/icons/icon-sun.svg'
import moon from '../assets/icons/icon-moon.svg'
import useLocalStorege from '../../hooks/useLocalStorege'

// const todo = [
//   { text: 'cortat algo', completed: true },
//   { text: 'cremar algo', completed: false },
//   { text: 'asar la carne', completed: false }
// ]



const Home = () => {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorege('Todos_v2', []);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

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
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

      </section>
      <section className='footer-sec'>
        {/* <TodoCounter
          total={totalTodos}
          completed={completedTodos}
        /> */}
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
        <TodoModal />
      </section>
    </>
  )
}

export default Home