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
    console.log("Child ShouldComponentUpdate Runned nextProps", nextProps, "nextState:", nextState)

    if (nextState.number>3) {
    return true;// Enable Render
    } else {
    return false;// Disable Render
    }
   }

  //  Created By CWUP
   componentWillUpdate(nextProps, nextState){
    console.log("Child ComponentWillUpdate Runned nextProps", nextProps, "nextState:", nextState)
   }

   // Created By "CDUP"
   componentDidUpdate(prevProps, prevState) { 
    console.log("Child componentDidUpdate Runned prevProps", prevProps, "prevState:", prevState)
    
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
