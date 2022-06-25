import React, { Component } from 'react'

export default class Posts extends Component {
  render() {
    return (
      <div>
        {this.props.loading ? <div>1</div> : <div>2</div>}
        {this.props.posts ? <div>1</div> : <div>2</div>}
      </div>
    )
  }
}
