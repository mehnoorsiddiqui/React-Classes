import React, { Component } from 'react';
import './App.css';
import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';
import Hello from './components/Hello';
import Inline from './components/Inline';
import Message from './components/Message';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';
import StyleSheet from './components/StyleSheet';
import UserGreeting from './components/UserGreeting';
import Welcome from './components/Welcome';
import './components/appStyles.css'
import styles from './components/appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';


class App extends Component {
  render() {
    return (
      <div className="App">
        <LifeCycleA/>
        {/* <Form/> */}
        {/* <Inline/> */}
        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}
         {/* <StyleSheet primary={true}/> */}
        {/* <Counter/> */}
        {/* <Message/> */}
        {/* <Hello name="MehnoorF" heroname="spiderman" >
          <p>This is children</p>
        </Hello> */}
        {/* <Welcome name="MehnoorC" heroname="spiderman"/>
        <Welcome name="SameeraC" heroname="batsrman"/> */}
        {/* <FunctionClick/>
        <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <ParentComponent/> */}
        {/* <UserGreeting/> */}
        {/* <NameList/> */}
       
      </div>

    )
  }
}

export default App;
