import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }


    render() {
        // 1 approach
        
        // let msg
        // if (this.state.isLoggedIn) {
        //     msg = <div>Welcome shubham</div>
        // } else {
        //     msg = <div>Welcome guest</div>
        // }
        // return (
        //     <div>
        //         <h1>conditional rendering</h1>
        //         <div>{msg}</div>
        //     </div>
        // )

        // 2 approach
        return this.state.isLoggedIn ? (<div>Welcome shubham</div>) : (<div>Welcome guest</div>)

    }
}

export default UserGreeting