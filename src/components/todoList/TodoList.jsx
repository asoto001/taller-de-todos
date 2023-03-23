import React from 'react'
import TodoCounter from '../todoCounter/TodoCounter'
//import TodoItem from '../todoItem/TodoItem'
import './style.scss'

const TodoList = (props) => {
    return (
        <>
            <section className='todo-sec'>
                <div className='list-container'>
                    <ul>
                        {props.children}
                    </ul>
                </div>
                <TodoCounter />
            </section>
        </>
    )
}

export default TodoList