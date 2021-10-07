import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component {

    static contextType = UserContext

    render() {
        return (
            <div>
                Component E context {this.context}
                <ComponentF/>
            </div>
        )
    }
}
// ComponentE.contextType = UserContext  or use the static method

// Context type has limitations it can only be used with class components 
//You can only subscribe to a single context using context type

export default ComponentE
