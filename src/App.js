import { useState } from 'react';
import './App.css';
import UserInput from './components/userInput';
import UserList from "./components/userList"
function App() {

  const [addUser,setadduser]=useState([])
  console.log(addUser )
  const addUserHandler=(uName,uAge)=>{
   setadduser((prevUser)=>{
    return[...prevUser,{name:uName,age:uAge,id:Math.random().toString()}]
   })
  }

  return (
    <div className="App">
      <UserInput onAddUser={addUserHandler}/>
      <UserList users={addUser} />

    </div>
  );
}

export default App;
