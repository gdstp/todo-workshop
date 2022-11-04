import React from 'react';
import { FaTrash } from 'react-icons/fa';

const ListItem = ({ title, isChecked, onComplete, onDelete }) => {
  return (
    <div className='list-item'>
      <div className='list-item-title'>
        <input type='checkbox' checked={isChecked} onChange={onComplete} />
        <h3 className={`${isChecked ? 'list-item-done' : ''}`}>{title}</h3>
      </div>
      <div className='list-icons'>
        <FaTrash color='#D84343' onClick={onDelete} />
      </div>
    </div>
  );
};

export default ListItem;
