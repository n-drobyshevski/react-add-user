import './App.css';

import UsersList from './components/Users/UsersList';
import NewUser from './components/NewUser.js/NewUser';


function App() {

  const testUsers = [
    { id: '01', username: 'name', age: 99, },
    { id: '02', username: 'another-name', age: 22, }
  ];

  return (
    <div className="App">
      <NewUser />
      <UsersList items={testUsers} />
    </div>
  );
};

export default App;
