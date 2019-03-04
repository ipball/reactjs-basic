import React, { Component } from 'react';
class FormComponent extends Component {
  state = {
    name: '',
    address: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      name: this.state.name,
      address: this.state.address
    });

    this.clearForm();
  };

  changeState = state => {
    return e => {
      this.setState({ [state]: e.target.value });
    };
  };

  clearForm = () => {
    this.setState({ name: '', address: '' });
  };

  render() {
    // extract state
    const { name, address } = this.state;
    return (
      <div>
        <h2>Address Form</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={this.changeState('name')}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={this.changeState('address')}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default FormComponent;
