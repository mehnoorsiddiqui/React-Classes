import React from 'react'

//Calling a method defined in the parent component from child component
function ChildCompenent(props) {
    return (
        // <div>
        //     <button onClick={props.greetHandler}>Greet Parent</button>
        // </div>

        //How to pass a parameter when calling a parent method from child component
        //so arrow function is used in the return statement

        <div>
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildCompenent
