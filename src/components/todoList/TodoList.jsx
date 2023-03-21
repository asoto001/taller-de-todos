import React from 'react'
//import TodoItem from '../todoItem/TodoItem'
import './style.scss'

const TodoList = (props) => {
    return (
        <>
            <section className='todo-sec'>
                <ul>
                    {props.children}
                </ul>
            </section>
        </>
    )
}

export default TodoList