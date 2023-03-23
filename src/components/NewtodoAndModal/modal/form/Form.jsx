import React, { useContext, useState } from 'react'
import { TodoProvider } from '../../../../router/Router'
import './style.scss'

const Form = () => {

    const [newTodoValue, setNewTodoValue] = useState('');
    const { addTodo, setOpenModal } = useContext(TodoProvider);

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (newTodoValue.length <= 0) return;
        addTodo(newTodoValue);
        setOpenModal(false);


    }

    return (
        <>
            <form
                className='form'
                onSubmit={onSubmit}
            >

                <textarea
                    value={newTodoValue}
                    onChange={onChange}
                    placeholder='Lavar la loza.' />
                <div>
                    <button
                        type='button'
                        onClick={onCancel}
                        className='cancel'
                    >
                        Cancelar
                    </button>
                    <button
                        className='add'
                        type='submit'
                    >
                        Añadir
                    </button>
                </div>
            </form>
        </>
    )
}

export default Form