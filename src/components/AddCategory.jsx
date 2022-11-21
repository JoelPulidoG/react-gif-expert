import { useState } from "react"

export const AddCategory = ({ handleAddCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        handleAddCategory(inputValue);
        setInputValue('');
    }

    return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Buscar gifs" 
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}