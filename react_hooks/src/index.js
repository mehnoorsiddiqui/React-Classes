import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App2 from './App2';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <App2/>
  </React.StrictMode>,
  document.getElementById('root')
);

//HOOKS
//Allow you to use React features without having to write a class
//Avoid the whole confusion with this keyword 
//Allow you to reuse stateful logic 
//Organize the logic inside a component into reusable isolation units


//RULES FOR HOOKS

//Only Call Hooks at the Top Level (not inside loops , conditions, or nested functions)

//Only call hooks from react functions (call then from within React functional components and not just any regular JavaScript function)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
