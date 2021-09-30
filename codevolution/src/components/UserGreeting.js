//Conditional Rendering
//1.If/else
//2.Elemenet variables
//3.Ternary conditional operator
//4.Short circuit operator

import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        //4.Short circuit operator this will render only the JSX when the condition is true
        //and return nothing when the condition is false

        return this.state.isLoggedIn && <div>Welcome Mehnoor</div>

        //3.Ternary conditional operator
        // return (
        //     this.state.isLoggedIn ?
        //         (<div>Welcome Mehnoor</div>) :
        //         (<div>Welcome Guest</div>)
        // )

        //2.Elemenet variables
        // let message;
        // if(this.state.isLoggedIn){
        //     message =  <div>Welcome Mehnoor</div>
        // }
        // else{
        //     message =  <div>Welcome Guest</div>
        // }
        // return(
        //     <div>{message}</div>
        // )

        //1.If/else
        // if(this.state.isLoggedIn){
        //     return (
        //             <div>Welcome Mehnoor</div>                   
        //     )
        // }
        // else{
        //     return (                
        //             <div>Welcome Guest</div>
        //     )
        // }

        // return (
        //     <div>
        //         <div>Welcome Mehnoor</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting

