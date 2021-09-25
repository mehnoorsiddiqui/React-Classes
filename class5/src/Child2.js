import React, { useReducer } from "react";
import counterReducer from "./counterReducer";

const Child2 = () => {
    let [state,dispatch]=useReducer(counterReducer,10);
    console.log(state);
    return(
        <div>
            <h2>This is second child using counter reducer</h2>
            <h3>Value of reducer state is: {state}</h3>
            <button onClick={()=>dispatch('INCREMENT')}>Icrement Reducer</button>
        </div>
    )
}

export default Child2;
