import React from 'react'

const heading ={
    fontSize: '72px',
    color: 'blue'
}
function Inline() {
    //using css module you cannot accidently use class name in the child component as styles.whatever is not defined here
    return (
        <div>
             {/* <h1 className='error'>Error</h1>

        <h1 className={styles.success}>Success</h1> */}
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline
