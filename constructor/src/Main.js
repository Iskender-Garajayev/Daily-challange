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
    // setTimeout(() => {
    //   this.setState({name:"Iskender"})
    // }, 3000);
  }
  changePropsVal=()=>{
    this.setState({name:"Tomy New"})
  }
  render() {
    console.log("III Render")
    return (
      <div>Main<br/>
        <b>{this.state.name}</b>
        <h3>{this.props.testProps}</h3>
        <ChildeMain name={this.state.name}/>
        <button onClick={this.changePropsVal}>Change Props Value</button>
      </div>
    )
  }
}
