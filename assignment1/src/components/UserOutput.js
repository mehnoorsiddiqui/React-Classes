import React, { Component } from 'react'
import UserInput from './UserInput'

class UserOutput extends Component {
    heading ={
        fontSize: '100px',
        color: 'orange'
      }
    render() {
        return (
            <div>
                <p>This is {this.props.name} and this my assigmnent number 1 </p>
                <p style={this.heading} >I am trying my best to get it done InshaAllah </p>
            </div>
        )
    }
}
//Note : you can you this.props without using constructor :) 

export default UserOutput
