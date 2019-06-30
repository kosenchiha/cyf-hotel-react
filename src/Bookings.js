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
        console.log("component mount");
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

  handleClick = (event, sortKey) => {
    console.log("i was clicked");
    const nData = this.state.data;
    function sortArr(a, b) {
      var nameA = a[sortKey];
      var nameB = b[sortKey];
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    }
    const sortedData = nData.sort(sortArr);
    this.setState({ data: sortedData });
  };

  render() {
    if (this.state.err) {
      return <span>Something went wrong!</span>;
    } else {
      return (
        <div className="App-content">
          <div className="container">
            <Search search={this.search} />
            <SearchResults
              results={this.state.data}
              handleClick={this.handleClick}
            />
            <AddBooking addNewBoking={this.addNewBoking} />
          </div>
        </div>
      );
    }
  }
}

export default Bookings;
