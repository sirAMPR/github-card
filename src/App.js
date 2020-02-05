import React, { Component } from "react";
import "./App.css";
import { Button } from "semantic-ui-react";
import { Card, Icon, Image } from "semantic-ui-react";

const getGithubUserInfo = githubUsername =>
  `https://api.github.com/users/${githubUsername}`;

class App extends Component {
  state = {
    user: {},
    active: false
  };

  // general method on App
  handleToggle = () => {
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
        <Button onClick={this.handleToggle}>Toggle User</Button>
        {this.state.active && (
          <Card>
            <Image
              src={this.state.user.avatar_url}
              alt="user profile"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>{this.state.user.name}</Card.Header>
              <Card.Description>{this.state.user.bio}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name="users" />
              {this.state.user.followers} Followers
            </Card.Content>
          </Card>
        )}
      </>
    );
  }
}

export default App;
