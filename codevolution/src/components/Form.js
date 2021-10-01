import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             textarea: '',
             topic: "react"
        }
    }
    usernameHandler= (event) => {
        this.setState(
            {
                username: event.target.value
            })
    }
    textareaHandler=(event)=>{
        this.setState(
            {
                textarea: event.target.value
            })
    }
    topicHandler = event => {
        this.setState(
            {
                topic: event.target.value
            })
    }
    submitHandler = event=>{
           alert(`${this.state.username} ${this.state.textarea}  ${this.state.topic}`)
           event.preventDefault()
    }

    render() {
        const {username,textarea,topic}=this.state
        return (
            <form onSubmit={this.submitHandler}> 
                <label>Username </label>
                <input type="text" value={username} onChange={this.usernameHandler}/>
                <br/><br/>
                <label>Textarea </label>
                <textarea value={textarea} onChange={this.textareaHandler}/>
                <br/><br/>
                <label>Skills </label>
                <select value={topic} onChange={this.topicHandler} >
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>

                <button type="submit"  >Submit</button>
                
            </form>
        )
    }
}

export default Form
