import React from 'react'
import chulito from '../assets/icons/icon-check.svg'
import x from '../assets/icons/icon-cross.svg'
import './style.scss'

const TodoItem = (props) => {

  return (
    <>
      <li className='li'>
        <span
          className={` Icon-check-done ${props.completed && 'Icon-check-done--active'}`}
          onClick={props.onComplete}
        >
          <figure>
            <img src={chulito} alt="" />
          </figure>
        </span>
        <h3 className={`li__h3 ${props.completed && 'li__h3-complete'}`} >
          {props.text}
        </h3>
        <span
          className={` Icon-check ${props.completed && 'TodoItem-p--complete'}`}
          onClick={props.onDelete}
        >
          <figure>
            <img src={x} alt="" />
          </figure>
        </span>
      </li>
    </>
  )
}

export default TodoItem

