import React from 'react'
import ReactDOM from 'react-dom';
import './style.scss'

const Modal = ({ children }) => {
    return ReactDOM.createPortal(
        <div className='Modal' >
            {children}
        </div>,

        document.getElementById('modal')
    );
}

export default Modal

