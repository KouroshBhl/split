import React, { useState } from 'react';
import Button from './Button';

const Bill = ({ selectFriend, onSplitBill, onSelectFriend }) => {
  const [bill, setBill] = useState('');
  const [expense, setExpense] = useState('');
  const friendExp = bill - expense;
  const [billPay, setBillPay] = useState('You');

  const splitHandler = (e) => {
    e.preventDefault();

    if (!bill || !expense) return;

    const paidBy = billPay === 'You' ? friendExp : -expense;

    onSplitBill(paidBy);
    onSelectFriend(null);
  };

  return (
    <form className='form form-split-bill' onSubmit={splitHandler}>
      <h2>SPLIT A BILL WITH {selectFriend.name}</h2>

      <label htmlFor='bill'>
        <span>🤑</span> Bill value
      </label>
      <input
        type='text'
        id='bill'
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor='expense'>
        <span>🧪</span> Your expense
      </label>
      <input
        type='text'
        id='expense'
        value={expense}
        onChange={(e) =>
          setExpense(
            Number(e.target.value) > bill ? bill : Number(e.target.value)
          )
        }
      />

      <label htmlFor='bill'>
        <span>🧍</span> {selectFriend.name}'s expense
      </label>
      <input type='text' id='bill' disabled value={friendExp} />

      <label htmlFor='bill'>
        <span>💰</span> Who is paying the bill?
      </label>
      <select
        name=''
        id=''
        value={billPay}
        onChange={(e) => setBillPay(e.target.value)}
      >
        <option value='You'>You</option>
        <option value={selectFriend.name}>{selectFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};

export default Bill;
