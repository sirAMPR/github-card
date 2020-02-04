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
    if (this.state.active === false) {
      fetch(getGithubUserInfo("sirAMPR"))
        .then(response => response.json())
        .then(data => {
          this.setState({ user: data, active: true });
        });
    } else {
      this.setState({ active: false });
    }
  };

  // lifecycle method on App
  render() {
    return (
      <>
        <button onClick={this.handleToggle}>Toggle User</button>
        {this.state.active && (
          <>
            <img src={this.state.user.avatar_url} alt="user profile" />
            <h1>{this.state.user.name}</h1>
            <p>{this.state.user.bio}</p>
            <p>Followers: {this.state.user.followers}</p>
          </>
        )}
      </>
    );
  }
}

export default App;
