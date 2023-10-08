import React, { useState } from 'react';
import Button from './Button';

const AddFriend = ({ onAddFriend, onOpen }) => {
  const [friendName, setFriendName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  const setAddFriendHandler = (e) => {
    e.preventDefault();
    if (!friendName || !image) return;

    const createID = crypto.randomUUID();

    const newFriend = {
      name: friendName,
      picture: `https://i.pravatar.cc/48${createID}`,
      id: createID,
      payment: 0,
    };

    onAddFriend(newFriend);

    setFriendName('');
    setImage('https://i.pravatar.cc/48');
    onOpen(false);
  };

  return (
    <form className='form-add-friend' onSubmit={setAddFriendHandler}>
      <label htmlFor='friendName'>
        <span>🙋‍♀️</span> Friend name
      </label>
      <input
        type='text'
        id='friendName'
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />

      <label htmlFor='friendUrl'>
        <span>🏞️</span> Image URL
      </label>
      <input
        type='text'
        id='friendUrl'
        placeholder='i.pravatar.cc'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
};

export default AddFriend;
