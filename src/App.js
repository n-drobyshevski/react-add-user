import './App.css';

import UsersList from './components/Users/UsersList';
import NewUser from './components/NewUser.js/NewUser';
import Modal from './components/UI/Modal/Modal';

import { useState } from 'react';


function App() {
  const testUsers = [
    { id: '01', username: 'name', age: 99, },
    { id: '02', username: 'another-name', age: 22, }
  ];

  const [modalActive, setsModalActive] = useState(true);
  const [usersData, setUserData] = useState(testUsers);

  const newUserHandler = (user) => {
    setUserData(() => {
      return [user, ...usersData];
    })
  };

  const closeModalHandler = () =>{
    setsModalActive(false);
  }

  return (
    <div className="App">
      <NewUser onNewUser={newUserHandler} />
      <UsersList items={usersData} />

     { modalActive && <Modal onCloseModal={closeModalHandler} title='Error' content='error desc'></Modal>}
    </div>
  );
};

export default App;
