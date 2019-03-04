import React, { Component } from "react";

class App extends Component {
  state = {
    notes: ["Note@1", "Note@2", "Note@3"],
    noteValue: ""
  };

  componentDidMount() {
    this.noteInput.focus();
  }

  addNote = e => {
    if (e.keyCode === 13) {
      this.setState({ notes: [...this.state.notes, e.target.value], noteValue: '' });      
    }
  };

  changeValue = e => {
    this.setState({ noteValue: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onKeyUp={this.addNote}
          value={this.state.noteValue}
          onChange={this.changeValue}
          ref={input => (this.noteInput = input)}
        />
        <hr />
        <ul>
          {this.state.notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
