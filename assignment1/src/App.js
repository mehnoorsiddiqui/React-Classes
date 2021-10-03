import React,{useState} from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';



function App() {
  let [username,setUsername]=useState('Basit')

  function OnChangeHandler(event){
    setUsername(event.target.value)
  }
  
  return (
    <div className="StyleSheetClass">
      <UserInput change={OnChangeHandler} currentName={username}/>
     <UserOutput name={username}/>
    </div>
  );
}

export default App;
