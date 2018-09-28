import React from 'react';
import './Button.css';

const Button = ({ className, ...props}) => {
    return (
        <button className={`btn ${className}`} {...props} >
            { props.children }
        </button>
    );
};

export default Button;