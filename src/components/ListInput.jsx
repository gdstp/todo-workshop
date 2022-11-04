import React, { useState } from 'react';

const ListInput = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    onSubmit(value);
    setValue('');
  };

  return (
    <div className='input-area'>
      <input
        type='text'
        placeholder='O que precisa ser feito?'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={40}
      />
      <button onClick={handleSubmit}>Adicionar</button>
    </div>
  );
};

export default ListInput;
