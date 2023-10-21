import React from 'react';

const Input = ({ value, onChange }) => {
  const handleChange = (event) => {
    const inputValue = parseInt(event.target.value);
    if (inputValue === 0 || inputValue === 1) {
      onChange(inputValue);
    } else {
      onChange(0);
    }
  };

  return (
    <input
      type="number"
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
