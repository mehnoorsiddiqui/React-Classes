import React from 'react'

function ValidationComponent(props) {
    let message;
    if(props.textLength<5){
       message= <p>Text length entered is too short </p>
     }
     else{
        message= <p>Text length entered is long enough </p>   
     }
    
    return (
        <React.Fragment>
           {message}     
        </React.Fragment>
    )
}

export default ValidationComponent
