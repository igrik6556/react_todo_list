import React from 'react';

const CustomInput = ({type, className, ...props}) => {
    return (
        <input
         type={type ? type : 'text'} 
         className={className ? className : 'form-control'}
         {...props} />
    );
};

export default CustomInput;