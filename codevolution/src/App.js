import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import Hello from './components/Hello';
import Message from './components/Message';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div>
        <Counter/>
        {/* <Message/> */}
        {/* <Hello name="MehnoorF" heroname="spiderman" >
          <p>This is children</p>
        </Hello>
        <Welcome name="MehnoorC" heroname="spiderman"/>
        <Welcome name="SameeraC" heroname="batsrman"/> */}
      </div>

    )
  }
}

export default App;
