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
      data: [],
      sorted: true
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
        console.log("component Bookings mount");
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
  addNewBooking = newBookind => {
    console.log(newBookind);
    let updatedBookingData = [...this.state.data, newBookind];
    this.setState({ data: updatedBookingData });
  };

  handleClick = sortKey => {
    console.log("i was clicked");
    const dataToSort = this.state.data;
    function sortArr(a, b) {
      if (a[sortKey] < b[sortKey]) {
        return -1;
      }
      if (a[sortKey] > b[sortKey]) {
        return 1;
      }
      return 0;
    }
    const sortedData = dataToSort.sort(sortArr);
    this.state.sorted
      ? this.setState({ data: sortedData, sorted: !this.state.sorted })
      : this.setState({
          data: sortedData.reverse(),
          sorted: !this.state.sorted
        });
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
            <AddBooking
              addNewBooking={this.addNewBooking}
              dataLength={this.state.data.length}
            />
          </div>
        </div>
      );
    }
  }
}

export default Bookings;
