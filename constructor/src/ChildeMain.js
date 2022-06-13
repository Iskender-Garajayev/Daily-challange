import React, { Component } from 'react'
// Created By "RCC"
export default class ChildeMain extends Component {
  componentDidMount() {
    console.log("Child ComponentDidMount Runned")
  }
  // Created by rco
  constructor(props) {
    super(props)
    console.log("Child Constructor Runned")
  }
  componentWillMount() {
    console.log("Child ComponentWillMount Runned")
  }
  componentWillReceiveProps(nextProps) {
    console.log("ComponentWillReceiveProps Runned")
  }
  // Created By "SCU"
  shouldComponentUpdate(nextProps, nextState) { 
    console.log("shouldComponentUpdate Runned")
    if (nextState.number>30) {
    return true;
    } else {
    return false;
    }
   }

  //  Created By CWUP
   componentWillUpdate(nextProps, nextState){
    console.log("ComponentWillUpdate Runned")
   }

   state={number:0}
   changeNumber=(event)=>{this.setState({number:event.target.value})}
  render() {
    console.log("Child Render Runned")

    return (
      <div>
        ChildeMain
        <h2>Props: {this.props.name}</h2>
        <input name='name' id='name' onChange={this.changeNumber}></input>
        <br/>Number: {this.state.number} /10= {this.state.number/10}
      </div>
    )
  }
}
