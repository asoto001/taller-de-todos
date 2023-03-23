import React from 'react'
import './style.scss'
import plus from '../assets/icons/plus.svg'

const NewTodoBtn = (props) => {

  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <>
      <button
        onClick={onClickButton}
        className= 'Modal-btn'
        >
        <img src={plus} alt="" />
      </button>
    </>
  )
}

export default NewTodoBtn