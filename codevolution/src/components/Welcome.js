import React,{Component} from 'react';
 
//props are immutable can't assign to read only property
class Welcome extends Component{
    render(){
        return(
            <h1>Welcome {this.props.name} a.k.a {this.props.heroname}</h1>
        )
    }
}
export default Welcome;

