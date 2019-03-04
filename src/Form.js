import React, { Component } from "react";
class FormComponent extends Component {
  render() {
    return (
      <div>
        <h2>Address Form</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" />
          </div>
          <button type="button" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default FormComponent;
