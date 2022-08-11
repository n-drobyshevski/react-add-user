import './App.css';

import UsersList from './components/Users/UsersList';
import NewUser from './components/NewUser.js/NewUser';

import { useState } from 'react';


function App() {
  const testUsers = [
    { id: '01', username: 'name', age: 99, },
    { id: '02', username: 'another-name', age: 22, }
  ];

  const [usersData, setUserData] = useState(testUsers);

  const newUserHandler = (user) => {
    setUserData(() => {
      return [user, ...usersData];
    })
  };

  return (
    <div className="App">
      <NewUser onNewUser={newUserHandler} />
      <UsersList items={usersData} />
    </div>
  );
};

export default App;
