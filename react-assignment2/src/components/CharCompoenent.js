import React from 'react'

const charStyle={
    display: 'inline-block',
     padding: '16px',
      textAlign: 'center', 
      margin: '16px',
       border:'1px solid black'}

function CharCompoenent(props) {
    
    return (
        <div style={charStyle} onClick={props.click}>
           {props.char}
        </div>
    )
}

export default CharCompoenent
