import React from "react";

const withCounter = (WrappedComponent ,increment)=> {
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        incrementCount = () => {
            this.setState(prevState =>{
                return {count: prevState.count + increment}
            })
        }
        render(){
            return <WrappedComponent
            count={this.state.count}
            incrementCount={this.incrementCount}
            {...this.props} />
        }
    }
    return WithCounter
}

//If you donot add {...this.props} then props will not be passed to the components that used the HOC 
//which is withCounter here in this case
export default withCounter