import React, { Component } from "react";
import axios from "axios";
import Posts from "./Posts";

export default class Main extends Component {
  state = { posts: [], loading: true };
  componentWillUnmount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .than(k=>k.data)
      .than(result => {
        setTimeout(() => {
          this.setState({ posts: result, loading: false });
        }, 2000);
      });
  }
  render() {
    // console.log(this.state.posts)
    return (
      <div>
        <h2>Main Component</h2>
        {/* {this.state.loading === true ? 'Loading.........' : 'Data Is Here.....'} */}
        <Posts {...this.state} />
      </div>
    );
  }
}
