import React from 'react';

const Checkbox = ({ value, onChange }) => {
  const handleChange = () => {
    onChange(value === 0 ? 1 : 0);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={value === 1}
        onChange={handleChange}
      />
      Entrada 2
    </label>
  );
};

export default Checkbox;
