import React, { Component } from 'react'

export default class UserList extends Component {
  state={users:[]}

  // Created By "cdm"
  componentDidMount() { 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(jsonData => this.setState({users:jsonData}))
   }
  render() {
    return (
      <div>
        <h1>Users</h1>
        {this.state.users.map((item)=>(<div key={item.id}>{item.name}</div>))}
      </div>
    )
  }
}
