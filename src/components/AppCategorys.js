import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AppCategorys = ({ setCategoria }) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');

        if (inputValue.trim().length > 2) {
            setCategoria(c => [ inputValue,...c])
            setInputValue('')
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <span>{inputValue}</span>
        </form>
    )
}


AppCategorys.propTypes= {
    setCategoria:PropTypes.func.isRequired
}

