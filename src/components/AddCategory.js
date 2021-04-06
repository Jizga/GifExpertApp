import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

const [inputValue, setinputValue] = useState('');

const hadleInputChange=(e)=>{
    setinputValue(e.target.value);
}

const hadleSumit = (e)=>{
    //Para evitar que se recargue la página tras el sumit del form
    e.preventDefault();
    //Recibir la nueva categoría por props
    //Añadir la nueva categ al array inicial de categories

    if(inputValue.trim().length > 2) {
        setCategories(categ => [inputValue, ...categ] );
        setinputValue('');
    }
    
    
}

    return (
        
        <form onSubmit={ hadleSumit } >
            <input 
            type="text"
            value={ inputValue }
            onChange={ hadleInputChange }
            />
        </form>
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}
