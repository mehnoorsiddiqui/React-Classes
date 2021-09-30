import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        // this.clickHandler=this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message: 'Good bye!!'
    //     })
    //     console.log(this)
    // }

    //approach no. 4
    clickHandler =()=>{
        this.setState({
                    message: 'Good bye!!'
                })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}> Click</button> */}
              
                {/* arrow function approach */}
                {/* <button onClick={() => this.clickHandler()}> Click</button> */}

                {/* Binding in the class constructor approach in official react documentation */}
                <button onClick={this.clickHandler}> Click</button> 

            </div>
        )
    }
}

export default EventBind
