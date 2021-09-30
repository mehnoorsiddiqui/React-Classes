import React from "react";

//The JSX version of Hello component

// const Hello = (props) => {
//     //The JSX version of Hello component

//     return(
//         <div>
//             <h1>Hello {props.name} aka {props.heroname}</h1>
//             {props.children}
//         </div>
//     )

    // Without JSX just react
    // return React.createElement(
    //     'div', 
    //     {id:'hello',className: 'dummyClass'}, 
    //     React.createElement('h1', null, "Hello Mehnoor"));
// }


//Destructuring in the parameter

// const Hello = ({name,heroname}) => {
//     return(
//         <div>
//             <h1>Hello {name} aka {heroname}</h1>
//         </div>
//     )
// }

//Destructuring in the function body
const Hello = (props) => {
    const{name,heroname}=props
    return(
        <div>
            <h1>Hello {name} aka {heroname}</h1>
            {props.children}
        </div>
    )
}
export default Hello;