import React from 'react';
import Button from './Button';

const Bill = ({ selectFriend }) => {
  return (
    <form className='form form-split-bill'>
      <h2>SPLIT A BILL WITH {selectFriend.name}</h2>

      <label htmlFor='bill'>
        <span>🤑</span> Bill value
      </label>
      <input type='text' id='bill' />

      <label htmlFor='expense'>
        <span>🧪</span> Your expense
      </label>
      <input type='text' id='expense' />

      <label htmlFor='bill'>
        <span>🧍</span> {selectFriend.name}'s expense
      </label>
      <input type='text' id='bill' />

      <label htmlFor='bill'>
        <span>💰</span> Who is paying the bill?
      </label>
      <select name='' id=''>
        <option value='you'>You</option>
        <option value='clark'>{selectFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};

export default Bill;
