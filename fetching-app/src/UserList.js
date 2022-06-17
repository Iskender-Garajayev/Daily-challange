import React, { Component } from 'react'

export default class UserList extends Component {
  state={users:[], isLoading : true}

  // Created By "cdm"
  componentDidMount() { 
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(jsonData => this.setState({users:jsonData, isLoading:false}))
    }, 3000);
   }
  render() {
    const {isLoading, users}=this.state
    return (
      <div>
        <h1>Users</h1>
        {isLoading === true ? 'Loading ...' : users.map((item)=>(<div key={item.id}>{item.name}</div>))}
        {/* {this.state.users.map((item)=>(<div key={item.id}>{item.name}</div>))} */}
      </div>
    )
  }
}