import React, { Component } from 'react'

class Lifecyclea extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Name: "shubham"
    }
    console.log("LifeCycle Constructor")
  }
  static getDerivedStateFromProps(props, state) {
    console.log("lifecycleA getDrivedStateFromProps")
    return null
  }

  componentDidMount() {
    console.log("lifecycleA componentDidMount")
  }

  render() {
    console.log("lifecycleA render")
    return (

      <div>lifeCycleA</div>
    )
  }
}

export default Lifecyclea