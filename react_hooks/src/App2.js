import React from 'react'
import './App.css';
import HookCounterOne from './components2/HookCounterOne';

//useEffect Hook
function App2() {
    return (
        <div className="App">
            <HookCounterOne/>
        </div>
    )
}

//The Effect Hook lets you perform side effects in functional components
//It is a close replacement for the componentDidMount,componentDidUpdate and componentWillUnmount
export default App2
