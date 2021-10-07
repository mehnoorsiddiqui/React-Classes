import React, { Component } from 'react'
import ComponentC from './component6/ComponentC'
import { UserProvider } from './component6/userContext'

class App6 extends Component {
    render() {
        return (
            <div>
                  {/* // 2.Provide a context value */}
                <UserProvider value="Mehnoor">  
                    <ComponentC />
                </UserProvider>
            </div>
        )
    }
}

//CONTEXT
// 1.Create the context
// 2.Provide a context value
// 3.Consume the context value

export default App6
