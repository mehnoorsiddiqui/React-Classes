import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCountertwo from './components/HookCountertwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';

//useState Hook

function App() {
  return (
    <div className="App">
      {/* <HookCounterFour/> */}
    {/* <HookCounterThree/> */}
    {/* <HookCountertwo/> */}
    {/* <HookCounter/> */}
     {/* <ClassCounter/> */}
    </div>
  );
}
//Summary of State Hook 
//in classes the state is always an object
//with the useState hook , the state doesnot have to be an object.
//The useState hook returns an array with 2 elements
//the first element is the current value of the state and the second element is a state setter function
//New state value depends on the previous state value? You can pass a function to the setter function
//When dealing with objects or arrays always make sure to spread your state variable and then call the setter function 


export default App;
