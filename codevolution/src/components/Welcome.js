import React,{Component} from 'react';
 
//props are immutable can't assign to read only property
class Welcome extends Component{
    render(){
        const{name,heroname} = this.props
        // const{state1,state1} = this.state
        return(
            <h1>Welcome {name} a.k.a {heroname}</h1>
        )
    }
}
export default Welcome;

