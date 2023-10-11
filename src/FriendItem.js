import React from 'react';
import Button from './Button';

const FriendItem = ({ friend, selectFriend, onFriendSelected, onOpen }) => {
  const currentFriend = friend.id === selectFriend?.id;

  const handleClick = () => {
    onFriendSelected(friend);
    onOpen(false);
  };

  return (
    <li className={currentFriend ? 'selected' : ''}>
      <img src={friend.picture} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.payment > 0 && (
        <p className='green'>
          {friend.name} owes you {friend.payment}€
        </p>
      )}

      {friend.payment < 0 && <p className='red'>You owes {friend.payment}€</p>}

      {friend.payment === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={handleClick} friend={friend}>
        {currentFriend ? 'Close' : 'Select'}
      </Button>
    </li>
  );
};

export default FriendItem;
