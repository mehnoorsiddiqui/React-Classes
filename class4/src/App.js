import React ,{useState} from 'react';
import './App.css';
import Message from './message';

function App() {
  let [count,setcount]=useState(0);
  let [isMorning,setMorning] = useState(false);
  return (
    <div className={isMorning ? "dayLight" : "box"}>
      <h1> Day time = {isMorning ? "morning": "night"}</h1>
     <Message counter={count}/>
     <button onClick={()=> setcount(++count)}>
       updating count variable
     </button>


     <button onClick={()=>setMorning(!isMorning)}>update day</button>
    </div>
  );
}

export default App;
