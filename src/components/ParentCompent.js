import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentCompent extends Component {
    constructor(props){
        super(props)
        this.state = {
            parentName : "Parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childname){
        alert(`hello ${this.state.parentName} from ${childname}`)
    }
  render() {
    return (
      <div>
            <p className="bg-danger">Parent child relationship</p>
            <ChildComponent greetHandler = {this.greetParent} />
      </div>
    )
  }
}

export default ParentCompent