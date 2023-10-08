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
    payment: 8,
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
    console.log(selectFriend);
  };

  return (
    <div className='app'>
      <div>
        <Friend
          onSelectFriend={setSelectFriend}
          friends={friends}
          onFriendSelected={handleFriendSelected}
          selectFriend={selectFriend}
        />

        {open && <AddFriend onAddFriend={addFriendHandler} onOpen={setOpen} />}
        <Button onClick={() => setOpen((open) => !open)}>
          {!open ? 'Add Friend' : 'close'}
        </Button>
      </div>
      {selectFriend && <Bill selectFriend={selectFriend} />}
    </div>
  );
}

export default App;
