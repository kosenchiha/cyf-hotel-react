import React, { Component } from "react";
const Button = () => <button className="btn btn-primary">Search IDs</button>;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "" };
  }
  handleSearchInput = event => {
    this.setState({ searchInput: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.search(this.state.searchInput);
  };

  render() {
    return (
      <div className="search">
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row search-wrapper">
          <div className="col">
            <form
              onSubmit={this.handleSubmit}
              className="form-group search-box"
            >
              <label htmlFor="customerName">Customer name</label>
              <div className="search-row">
                <input
                  onChange={this.handleSearchInput}
                  value={this.state.searchInput}
                  type="text"
                  id="customerName"
                  className="form-control"
                  placeholder="Customer Id"
                />
                <Button />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
