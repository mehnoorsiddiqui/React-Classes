import React from 'react'
import Person from './Person'

// function NameList() {
//     // const name=['Bruce' , 'Clark', 'Diana']
//     // return (
//     //     <div>
//     //         {/* <h2>{name[0]}</h2>
//     //         <h2>{name[1]}</h2>
//     //         <h2>{name[2]}</h2> */}

//     //   {/* List rendering using map method */}
//     //         {
//     //             name.map(name => <h2>{name}</h2>)
//     //         }
//     //     </div>
//     // )

//     //or this approach for concise code
//     const name=['Bruce' , 'Clark', 'Diana']
//     const nameList = name.map(name => <h2>{name}</h2>)
//     return <div>{nameList}</div>
// }

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 24,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 22,
            skill: 'Vue'
        }
    ]
    // const personList = persons.map(person =>
    //     <h2>
    //         I am {person.name}. I am {person.age} years old. I know {person.skill}
    //     </h2>
    //     )

    //using JSX in a separate component
    const personList = persons.map(person=>
        <Person key={person.id} person={person}/>
    )
    return <div>{personList}</div>

}

//function NameList(){
    
   //INDEX AS KEY

//    when to use index as a key?
//    1. The items in your list donot have a unique id
//    2. The list is static list and will not change
//    3. The list will never be recorded or filtered

//     const name=['Bruce' , 'Clark', 'Diana']
//     const nameList = name.map((name ,index)=> <h2 key={index}> {index} {name}</h2>)
//     return <div>{nameList}</div>
// }


export default NameList
