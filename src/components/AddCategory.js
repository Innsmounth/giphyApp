import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategoria}) => {
    const [inputValue, setInputValue] = useState(''); //Valor de inputValue que es lo que se pon e en la caja de input por defecto
    
    const handleInputChange = (e) =>{
        //Cada que se escribe algo nuevo en el input
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        //Cada que se presiona enter se manda a llamar esta parte del codigo
        e.preventDefault();//Impide que se recargue la pagina completa
        // console.log(inputValue,'<--------- InputValue')

        setCategoria((categoriaAnterior)=> {
            // console.log(categoriaAnterior,'<---------- categoria')
            return [inputValue,...categoriaAnterior]
        });
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit} > 
            <h2>{inputValue}</h2> 
            <input
            type = "text"
            value = {inputValue}
            onChange={handleInputChange}//cada que se presione en el input
            />
        </form>
            
    )
}


AddCategory.propTypes={
    setCategoria :  PropTypes.func.isRequired
};