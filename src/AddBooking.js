import React, { Component } from "react";
class AddBooking extends Component {
  state = {
    id: null,
    title: null,
    firstName: null,
    surname: null,
    roomId: null,
    checkInDate: null,
    checkOutDate: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewBoking(this.state);
  };
  inputRow = (idName, placeholderText, lableText) => {
    return (
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor={idName}>
          {lableText}
        </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            type="text"
            id={idName}
            placeholder={placeholderText}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.inputRow("id", "ID", "ID")}
        {this.inputRow("title", "Title", "Title")}
        {this.inputRow("firstName", "First Name", "First Name")}
        {this.inputRow("surname", "Surname", "Surname")}
        {this.inputRow("roomID", "Room ID", "Room ID")}
        {this.inputRow("checkInDate", "Check In", "Check In")}
        {this.inputRow("checkOutDate", "Check Out", "Check Out")}
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
export default AddBooking;
