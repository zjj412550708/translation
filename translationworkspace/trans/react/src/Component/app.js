import React, { Component } from "react";
import Trans from "./trans";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "中英互译"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.test}</h1>
        <hr />
        <Trans />
      </div>
    );
  }
}
export default App;
