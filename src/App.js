import React, { Component } from "react";
import Form from "./Form";
import Contact from "./Contact";

class App extends Component {
  state = {
    contacts: [{ name: "Somchai Haha", Address: "123/4242" }]
  };

  render() {
    return (
      <div className="container">
        <Form />
        <hr />
        <Contact {...this.state} />
      </div>
    );
  }
}

export default App;
