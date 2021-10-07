import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {/* passing function as a child to the userconsumer component */}
                    {/* // 3.Consume the context value */}
                    { username => {
                            return <div>Hello {username}</div>
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default ComponentF
