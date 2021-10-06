import React, { Component } from 'react'
import './App.css'
import ClickCounter2 from './component5/ClickCounter2'
import Counter from './component5/Counter'
import HoverCounter2 from './component5/HoverCounter2'
import User from './component5/User'

class App5 extends Component {
    render() {
        return (
            <div className="App">
                <Counter>
                    {(count, incrementCount) => (
                        <ClickCounter2 count={count} incrementCount={incrementCount} />
                    )}
                </Counter>
                <Counter>
                    {(count, incrementCount) => (
                        <HoverCounter2 count={count} incrementCount={incrementCount} />
                    )}
                </Counter>
                {/* <ClickCounter2/>
                <HoverCounter2/>
                <User render={(isLoggedIn) => isLoggedIn? 'Mehnoor': 'Guest'}/> */}
            </div>
        )
    }
}
//RENDER PROPS 
//To share the common functionality between components 
//the term "render prop " refers to a technique for sharing code between React components using a prop whose value is a function.

export default App5
