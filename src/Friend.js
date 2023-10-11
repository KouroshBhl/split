import React from 'react';
import FriendItem from './FriendItem';

const Friend = ({ selectFriend, friends, onFriendSelected, onOpen }) => {
  return (
    <div className='sidebar'>
      <ul>
        {friends.map((friend) => {
          return (
            <FriendItem
              friend={friend}
              key={friend.id}
              selectFriend={selectFriend}
              onFriendSelected={onFriendSelected}
              onOpen={onOpen}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Friend;
