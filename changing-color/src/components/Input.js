import React, {useState} from 'react'

function Input({setColor}) {
    const [inputValue, setInputValue]= useState('')

    const handleChange=(e)=>{
        setInputValue(e.target.value)
    };

    const handleClick =()=>{
        setColor(inputValue);
    };
  return (
    <div>
        <input
        type='text'
        placeholder='Enter color here'
        value={inputValue}
        onChange={handleChange} />
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Input