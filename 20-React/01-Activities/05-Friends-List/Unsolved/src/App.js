// Import 'useState' Hook from React
import React, { useEffect, useState } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import friends from './friends.json';
import './App.css';

function App() {
  // Using useState, declare a new state variable 'friendsList' and set it to the 'friends' array from 'friends.json'
  // Name the setter method 'setFriendsList'
  const [ friendList,setFriendList ] = useState(friends);

  // Create a method 'removeFriend()' that takes in 'id' and filters through 'friendsList'
  // Update the state with the new friends list.
  const removeFriend = id => {
    const newList = friendsList.filter(friend => friends.id !== id);
    setFriendList(newList);
  }

  return (
    <Wrapper>
      <h1 className="title">Friends List</h1>
      {friendList.map( friend => {
        <FriendCard
          id={friend.id}
          key={friend.key}
          image={friend.image}
          occupation={friend.occupation}
          location={friend.location}
          removeFriend={removeFriend}
        />
      })}
      {/* Pass in the 'removeFriend()' method and each property of a friend */}
    </Wrapper>
  );
}

export default App;
