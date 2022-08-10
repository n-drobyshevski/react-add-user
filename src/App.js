import './App.css';

import UsersList from './components/Users/UsersList';
import NewUser from './components/NewUser.js/NewUser';


function App() {
  return (
    <div className="App">
      <NewUser />
      <UsersList />
    </div>
  );
}

export default App;
