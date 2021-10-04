import React, { useState } from 'react';
import './App.css';
import CharCompoenent from './components/CharCompoenent';
import ValidationComponent from './components/ValidationComponent';

function App() {
  const [textEntered, settextEntered] = useState('')
  let textArray = textEntered.split('');
  function changeHandler(event) {
    settextEntered(event.target.value)
  }

  function deleteCharHandler(index) {
     const text = textEntered.split('');
     text.splice(index,1)
     const updatedText = text.join('');
     settextEntered(updatedText)
  }
  
  let charList = textArray.map((char,index) => {
    return <CharCompoenent char={char} key={index} click={()=> deleteCharHandler(index)} />
  })
  
  return (
    <div >
      <input type='text' onChange={changeHandler} />
      <p>{textEntered}</p>
      <ValidationComponent textLength={textEntered.length} />
      {charList}
    </div>
  );
}



// Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
// Create a new component (=> ValidationComponent) which receives the text length as a prop
// Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
// Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
// Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
// When you click a CharComponent, it should be removed from the entered text.

export default App;
