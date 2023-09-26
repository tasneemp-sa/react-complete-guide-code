import React, {useState} from 'react';
import UserInput from './components/UserInput/UserInput';
import UserList from './components/UserInput/UserList';
import ErrorModal from './components/UI/ErrorModal';


function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const addUserHandler = (userinput) => {
    setUsers(prevUsers => {
      return [...prevUsers, userinput]
    })
  }
  
  return (
    <div>
      <UserInput onAddUser={addUserHandler}/>
      <UserList users={users} />
    </div>
  );
}

export default App;
