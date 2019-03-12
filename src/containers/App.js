import React, { Component } from 'react';
// import Form from '../components/Form';
// import Contact from '../components/Contact';
import { Form, Contact } from '../components';

class App extends Component {
  state = {
    contacts: [{ name: 'Somchai Haha', address: '123/4242' }]
  };

  createContact = contact => {
    this.setState({
      contacts: [...this.state.contacts, contact]
    });
  };

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.createContact} />
        <hr />
        <Contact {...this.state} />
      </div>
    );
  }
}

export default App;
