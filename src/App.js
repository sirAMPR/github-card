import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // general method on App
  handleToggle() {
    console.log("toggle");
  }

  // lifecycle method on App
  render() {
    return <button onClick={this.handleToggle}>Toggle User</button>;
  }
}

export default App;
