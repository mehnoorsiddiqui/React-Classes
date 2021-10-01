import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Mehnoor '
        }
        console.log('LifeCycleB constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifeCycleB  componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycleB  componentDidUpdate')
    }
 
    render() {
        console.log('LifeCycleB render')
        return (
            <div>
                 <div>LifeCycleB</div>              
            </div>

        )
    }
}
//the order of Component Mounting Lifecycle B when called from A  Method is
// LifeCycleB constructor
// LifeCycleB getDerivedStateFromProps
// LifeCycleB render
// LifeCycleB constructor
// LifeCycleB getDerivedStateFromProps
// LifeCycleB renderLifeCycleB  componentDidMount
// LifeCycleB  componentDidMount

export default LifeCycleB
