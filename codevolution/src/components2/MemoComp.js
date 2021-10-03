import React from 'react'

function MemoComp({name}) {
    console.log('Rendering memo compenent')
    return (
        <div>
            {name}
        </div>
    )
}
//Similar to functional compenents but it works with functional components
export default React.memo(MemoComp)
