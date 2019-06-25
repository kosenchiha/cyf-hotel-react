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
    console.log(this.state);
    this.props.addNewBoking(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="id"
          placeholder="ID"
          onChange={this.handleChange}
        />
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Title"
          onChange={this.handleChange}
        />
        <input
          type="text"
          id="tfirstName"
          placeholder="First name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          id="surname"
          placeholder="Surname"
          onChange={this.handleChange}
        />
        <input
          type="text"
          id="roomID"
          placeholder="Room ID"
          onChange={this.handleChange}
        />
        <input
          type="text"
          id="checkInDate"
          placeholder="Check in"
          onChange={this.handleChange}
        />
        <input
          type="text"
          id="checkOutDate"
          placeholder="Check Out"
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}
export default AddBooking;
