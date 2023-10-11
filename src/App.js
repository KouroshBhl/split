import './index.css';
import Bill from './Bill';
import Friend from './Friend';
import AddFriend from './AddFriend';
import { useState } from 'react';
import Button from './Button';

const data = [
  {
    id: Math.floor(Math.random() * 1000),
    name: 'Clark',
    picture: 'https://i.pravatar.cc/300?img=1 ',
    payment: -7,
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: 'jonas',
    picture: 'https://i.pravatar.cc/300?img=2 ',
    payment: -1,
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: 'Simon',
    picture: 'https://i.pravatar.cc/300?img=3 ',
    payment: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(data);
  const [selectFriend, setSelectFriend] = useState(null);
  const [open, setOpen] = useState(false);

  const addFriendHandler = (friend) => {
    setFriends((prevFriends) => [...prevFriends, friend]);
  };

  const handleFriendSelected = (friend) => {
    setSelectFriend((cur) => (cur?.id === friend.id ? null : friend));
  };

  const handleSplitBill = (value) => {
    console.log(value);
    setFriends((friends) =>
      friends.map((friend) => {
        return friend.id === selectFriend.id
          ? { ...friend, payment: friend.payment + value }
          : friend;
      })
    );
  };

  return (
    <div className='app'>
      <div>
        <Friend
          onSelectFriend={setSelectFriend}
          friends={friends}
          onFriendSelected={handleFriendSelected}
          selectFriend={selectFriend}
          onOpen={setOpen}
        />

        {open && <AddFriend onAddFriend={addFriendHandler} onOpen={setOpen} />}
        <Button onClick={() => setOpen((open) => !open)}>
          {!open ? 'Add Friend' : 'close'}
        </Button>
      </div>
      {selectFriend && (
        <Bill
          selectFriend={selectFriend}
          onSplitBill={handleSplitBill}
          onSelectFriend={setSelectFriend}
        />
      )}
    </div>
  );
}

export default App;
