import React from 'react';
import './Modal.css';

const Modal = ({ children, ...props }) => {
    const handleClose = () => {
        props.handleClose();
        if (props.onClose) props.onClose();
    }
    return (
        <div
            className={ props.open? "modal-wrapper active" : "modal-wrapper"}
        >
            <div className="backdrop" onClick={handleClose}>
            </div>
            <div className="modal">
                {/* <div className="modal__header">
                    <span className="modal--cancel" onClick={props.handleClose}> X </span>
                </div> */}
                {children}
            </div>
        </div>
    );
};

export default Modal;