import React, { useContext, useState } from 'react'
import { TodoProvider } from '../../router/Router'
import './style.scss'

const TodoSearch = () => {

    const { searchValue, setSearchValue } = useContext(TodoProvider)

const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
}

    return (
        <>
            <div className='search-container'>
                <input 
                className='search-container__input' type="text"
                placeholder='Busca el todo que nesecitas ' 
                value={searchValue}
                onChange={onChangeSearchValue}
                />
            </div>
        </>
    )
}

export default TodoSearch