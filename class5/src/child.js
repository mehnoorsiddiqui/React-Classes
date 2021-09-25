import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Child = () =>{
    let counterValue=useContext(CounterContext);
    console.log(counterValue);

    return(
        <div>
            <h2>This is the first child is using counter Context</h2>
            <h3>{counterValue[0]}</h3>
            <button onClick={()=> {counterValue[1](++counterValue[0])}}>Increment Context</button>
        </div>
    )
}
export default Child;