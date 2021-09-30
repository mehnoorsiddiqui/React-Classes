import React from 'react'

//Using props key word 

// function Person(props) {
//     return (
//         <div>
//             <h2>
//                 I am {props.person.name}. I am {props.person.age} years old. I know {props.person.skill}
//             </h2>
//         </div>
//     )
// }


//Using destructring 
function Person({person}) {
    return (
        <div>
            <h2>
                I am {person.name}. I am {person.age} years old. I know {person.skill}
            </h2>
        </div>
    )
}

export default Person
