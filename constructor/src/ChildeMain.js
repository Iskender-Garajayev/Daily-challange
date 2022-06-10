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
  render() {
    console.log("Child Render Runned")

    return (
      <div>
        ChildeMain
      </div>
    )
  }
}
