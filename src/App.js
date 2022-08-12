import './App.css';

import UsersList from './components/Users/UsersList';
import NewUser from './components/NewUser.js/NewUser';
import Modal from './components/UI/Modal/Modal';

import { useState } from 'react';


function App() {
  const testUsers = [
    { id: '01', username: 'User 1', age: 99, },
    { id: '02', username: 'User 2', age: 22, }
  ];

  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState({ title: '', content: '', });
  const [usersData, setUserData] = useState(testUsers);

  const newUserHandler = (user) => {

    // check age
    if (user.age.length === 0) {
      setModalData(prevState => {
        return {
          ...prevState,
          title: 'Age not provided',
          content: 'Please enter your age in correct format',
        };
      });
      setModalActive(true);
    };

    // check username
    if (user.username.length === 0) {
      setModalData(prevState => {
        return {
          ...prevState,
          title: 'username not provided',
          content: 'Please enter your username',
        };
      });
      setModalActive(true);
    };

    setUserData(() => {
      return [user, ...usersData];
    })
  };

  const closeModalHandler = () => {
    setModalActive(false);
  }

  return (
    <div className="App">
      <NewUser onNewUser={newUserHandler} />
      <UsersList items={usersData} />

      {modalActive &&
        <Modal
          onCloseModal={closeModalHandler}
          title={modalData.title}
          content={modalData.content}>
        </Modal>}
    </div>
  );
};

export default App;
