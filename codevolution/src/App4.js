import React, { Component } from 'react'
import './App.css'
import ClickCounter from './components4/ClickCounter'
import HoverCounter from './components4/HoverCounter'

class App4 extends Component {
    render() {
        return (
            <div className="App">
                <ClickCounter/>
                <HoverCounter/>
            </div>
        )
    }
}


//Why Higher Order Components ?
//To share the common functionality between components
//Adds additional functionality to the original component
//A pattern where a function takes a component as an argument
//and returns a new component


export default App4
