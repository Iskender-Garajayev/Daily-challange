import React, { Component } from 'react'

export default class Posts extends Component {
  render() {
    return (
      <div>
        {/* {this.props.loading ? <div>Loading....</div> : } */}
        {this.props.loading ? <div>Loading....</div> : this.props.posts.map (item=> <div key={item.id} >{item.title}</div>) }
      </div>
    )
  }
}
