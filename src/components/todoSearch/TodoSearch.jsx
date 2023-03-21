import React, { useState } from 'react'
import './style.scss'

const TodoSearch = ({ searchValue, setSearchValue }) => {


const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
}

    return (
        <>
            <div className='search-container'>
                <input className='search-container__input' type="text" placeholder='onions' 
                value={searchValue}
                onChange={onChangeSearchValue}
                />
            </div>
        </>
    )
}

export default TodoSearch