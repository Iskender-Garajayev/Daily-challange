import React, { Component } from 'react'

export default class Main extends Component {
  // create by "rco"
  constructor(props) {
    super(props)
    console.log("Constructor Runned")
    console.log("Props=>", this.props)
  }
  render() {
    return (
      <div>Main</div>
    )
  }
}
