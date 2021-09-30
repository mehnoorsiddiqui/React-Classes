import React, { Children, Component } from 'react'
import ChildCompenent from './ChildCompenent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    render() {
        return (
            <div>
                <ChildCompenent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
