import React, { Component } from 'react'

export default class Main extends Component {
  // create by "rco"
  constructor(props) {
    super(props)
    console.log("Constructor Runned")
    console.log("Props=>", this.props)
    // this.state={name:"Okan"}
  }
  state={name:"Okan"}
  // Created By "CWM"
  componentWillMount() {
    console.log("ComponentWillMount Runned")
  }
  // Created By "CDM"
  componentDidMount() {
    console.log("ComponentDidMount Runned")
  }
  render() {
    console.log("Render")
    return (
      <div>Main
        <b>{this.state.name}</b>
      </div>
    )
  }
}
