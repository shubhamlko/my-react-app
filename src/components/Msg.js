import React, { Component } from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: "Welcome Visitor Pls Subscribe my Channel"
        }
    }
        changeMsg(){
            this.setState({
                message : "Thanks for Subscribe"
             } );
        }
        render(){
            return (
                <div>
                    <h1>{this.state.message}</h1>
                     <button type="button" onClick={() => this.changeMsg()}>click me</button> 
                    
                </div>
            )
        }
    }
export default Message