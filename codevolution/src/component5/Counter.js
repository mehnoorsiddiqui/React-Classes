import React, { Component } from 'react'

//implementing the common functionality here Render Props
class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    incrementCount = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }
    render() {
        return (
            <div>
               {/* it means we are passing count and incrementCount as an argument to the render props  */}
                {this.props.children(this.state.count,this.incrementCount)}
            </div>
        )
    }
}

export default Counter
