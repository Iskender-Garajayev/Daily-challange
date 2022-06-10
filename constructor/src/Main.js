import React, { Component } from 'react'
import ChildeMain from './ChildeMain'

export default class Main extends Component {
  // create by "rco"
  constructor(props) {
    super(props)
    console.log("I Constructor Runned")
    // console.log("Props=>", this.props)
    // this.state={name:"Okan"}
  }
  state={name:"Okan"}
  // Created By "CWM"
  componentWillMount() {
    console.log("II ComponentWillMount Runned")
  }
  // Created By "CDM"
  componentDidMount() {
    console.log("IV ComponentDidMount Runned")
    setTimeout(() => {
      this.setState({name:"Iskender"})
    }, 3000);
  }
  render() {
    console.log("III Render")
    return (
      <div>Main
        <b>{this.state.name}</b>
        <ChildeMain/>
      </div>
    )
  }
}
