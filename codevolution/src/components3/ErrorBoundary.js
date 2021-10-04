import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    //used to show the fallback UI when error is thrown
    static getDerivedStateFromError(error){
        return{
            hasError: true
        }
    }
    //used to log the error information
    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }
    render() {
        if(this.state.hasError){
            return <h1>Something went wrong</h1>
        }
        return this.props.children
        
    }
}


export default ErrorBoundary
