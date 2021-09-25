import React,{useState} from 'react';
import './App.css';
import Parent from './parent';
import CounterContext from './CounterContext';

function App() {
  let countState = useState(30);
  return (
    <CounterContext.Provider value={countState}>
      <div>
        <Parent />
      </div>
    </CounterContext.Provider>
   
  );
}

export default App;
