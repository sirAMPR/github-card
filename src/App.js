import React, { Component } from "react";
import "./App.css";

const getGithubUserInfo = githubUsername =>
  `https://api.github.com/users/${githubUsername}`;

class App extends Component {
  state = {
    user: {},
    active: false
  };

  // general method on App
  handleToggle = event => {
    fetch(getGithubUserInfo("sirAMPR"))
      .then(response => response.json())
      .then(data => {
        this.setState({ user: data });
      });
  };

  // lifecycle method on App
  render() {
    return <button onClick={this.handleToggle}>Toggle User</button>;
  }
}

export default App;
