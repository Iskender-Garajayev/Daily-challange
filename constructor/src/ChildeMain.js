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
    return false;
   }
  render() {
    console.log("Child Render Runned")

    return (
      <div>
        ChildeMain
        <h2>Props: {this.props.name}</h2>
      </div>
    )
  }
}
