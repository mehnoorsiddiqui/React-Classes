import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log('Pure comp')
        return (
            <div>
                Pure Component  {this.props.name}
            </div>
        )
    }
}
//Pure Components improves performance as they re-renders when there is a difference in shallow compenents
export default PureComp
