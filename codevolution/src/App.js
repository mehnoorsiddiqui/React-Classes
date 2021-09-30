import React, { Component } from 'react';
import './App.css';
import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';
import Hello from './components/Hello';
import Message from './components/Message';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter/> */}
        {/* <Message/> */}
        {/* <Hello name="MehnoorF" heroname="spiderman" >
          <p>This is children</p>
        </Hello> */}
        {/* <Welcome name="MehnoorC" heroname="spiderman"/>
        <Welcome name="SameeraC" heroname="batsrman"/> */}
        {/* <FunctionClick/>
        <ClassClick/> */}
        <EventBind/>
      </div>

    )
  }
}

export default App;
