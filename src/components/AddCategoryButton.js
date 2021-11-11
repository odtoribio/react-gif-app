import React, { useState } from 'react'
import PropTypes from 'prop-types'  

export const AddCategoryButton = ({ addCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (inputValue){
      addCategory(inputValue)
      setInputValue('')
    }
  }
  
  return (
    <form onSubmit={ handleOnSubmit }>
      <input 
        type="text"
        value={ inputValue }
        onChange= { handleInputValue }
      />
    </form>
  )
}

AddCategoryButton.propTypes = {
  addCategory: PropTypes.func.isRequired,
}
