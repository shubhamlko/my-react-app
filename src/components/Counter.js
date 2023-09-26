import React, { Component } from 'react'

 class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

setCounter(){
    this.setState({
        count : this.state.count + 1
    })
}
  render() {
    

    return (
      <div>
        <h2> Counter</h2>
        <p> you have clicked : {this.state.count}  times</p>
        <button type="button" onClick={() => this.setCounter()} className="btn btn-danger">click me</button> 

        </div>
    )
  }
}

export default Counter