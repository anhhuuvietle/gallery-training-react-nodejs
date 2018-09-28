import React from 'react';
import './Input.css';

const Input = ({ className, error, ...props}) => {
    return (
        <input
            className={`input ${error ? 'err' : ''} ${className? className : ''}`}
            {...props}
            required
        />
    );
};

export default Input;