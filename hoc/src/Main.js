import React, { Component } from 'react'
import axios from 'axios'

export default class Main extends Component {
  state={posts:[], loading:true}
  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .than(k=>k.data)
      .than(result=> {
        setTimeout(() => {
          this.setState({posts:result,loading:false})
        }, 2000);
      })
  }
  render() {
    console.log(this.state.posts)
    return (
      <div>
        Main Component
        {this.state.loading === true ? 'Loading.........' : 'Data Is Here.....'}
      </div>
    )
  }
}
