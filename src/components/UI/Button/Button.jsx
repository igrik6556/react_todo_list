import React from 'react';

const Button = (props) => {
    return (
        <button
         type={props.type ? props.type : 'button'} 
         className={props.className ? props.className : 'btn btn-primary'}
         onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;