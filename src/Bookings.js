import React, { Component } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import AddBooking from "./AddBooking.js";
//import FakeBookings from "./data/fakeBookings.json";

class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoading: true,
      data: []
    };
  }
  componentDidMount() {
    fetch("https://cyf-react.glitch.me/")
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          throw new Error("HTTP error");
        }
      })
      .then(data => {
        this.setState({
          // isLoading: false,
          data: data
        });
      })
      .catch(err => {
        this.setState({
          err: err
        });
      });
  }

  search = searchVal => {
    console.info("TO DO!", searchVal);
    const filteredResult = this.state.data.filter(result => {
      return result.firstName === searchVal || result.surname === searchVal;
    });
    this.setState({ data: filteredResult });
    console.log(filteredResult);
  };
  addNewBoking = newBookind => {
    console.log(newBookind);
    let updatedBookingData = [...this.state.data, newBookind];
    this.setState({ data: updatedBookingData });
  };

  render() {
    if (this.state.err) {
      return <span>Something went wrong!</span>;
    } else {
      console.log(this.state.data);

      return (
        <div className="App-content">
          <div className="container">
            <Search search={this.search} />
            <SearchResults results={this.state.data} />
            <AddBooking addNewBoking={this.addNewBoking} />
          </div>
        </div>
      );
    }
  }
}

export default Bookings;
