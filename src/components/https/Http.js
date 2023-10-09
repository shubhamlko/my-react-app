import axios from 'axios'
import React, { Component } from 'react'
 class Http extends Component {
    constructor(props){
        super(props)
        this.state ={
                posts : []
        }
    }
componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response =>{
        console.log(response)
        this.setState({posts: response.data})
    })
    .catch(error =>{
        console.log(error)
    })
}

  render() {
    const {posts} = this.state
     return (
        <>
      <div>Http app fetch data example</div>
      <ul>
      {
        posts.length ? posts.map(post => <li key={post.id}> {post.title} </li>) : null
      }
      </ul>
      </>
    )
  }
}

export default Http