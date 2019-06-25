// import React, { Component } from "react";
// import moment from "moment";
// class Line extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { selected: false };
//   }
//   handleClick = () => {
//     this.setState(state => ({
//       selected: !state.selected
//     }));
//   };
//   render() {
//     return (
//       <p
//         onClick={this.handleClick}
//         className={this.state.selected ? "selected" : ""}
//       >
//         {" "}
//         change colour when clicked
//       </p>
//     );
//   }
// }
// class SearchResults extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { selected: false };
//   }
//   handleClick = () => {
//     this.setState(state => ({
//       selected: !state.selected
//     }));
//   };
//   render() {
//     return (
//       <table className="table">
//         <Line />
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>First name</th>
//             <th>Surname</th>
//             <th>Email</th>
//             <th>Room ID</th>
//             <th>Check in</th>
//             <th>Check out</th>
//             <th>Number of days</th>
//           </tr>
//         </thead>
//         <tbody>
//           {this.props.results.map(booking => {
//             return (
//               <tr
//                 key={booking.id}
//                 onClick={this.handleClick}
//                 className={this.state.selected ? "selected" : ""}
//               >
//                 <td>{booking.id}</td>
//                 <td>{booking.title}</td>
//                 <td>{booking.firstName}</td>
//                 <td>{booking.surname}</td>
//                 <td>{booking.email}</td>
//                 <td>{booking.roomId}</td>
//                 <td>{booking.checkInDate}</td>
//                 <td>{booking.checkOutDate}</td>

//                 <td>
//                   {moment(booking.checkOutDate).diff(
//                     moment(booking.checkInDate),
//                     "days"
//                   )}
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     );
//   }
// }
// export default SearchResults;

import React, { Component } from "react";
import moment from "moment";
class Line extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }
  handleClick = e => {
    this.setState(state => ({
      selected: !state.selected
    }));
  };

  render() {
    let booking = this.props.booking;

    return (
      <tr
        onClick={this.handleClick}
        className={this.state.selected ? "selected" : ""}
      >
        <td>{booking.id}</td>
        <td>{booking.title}</td>
        <td>{booking.firstName}</td>
        <td>{booking.surname}</td>
        {/* <td>{booking.email}</td> */}
        <td>{booking.roomId}</td>
        <td>{booking.checkInDate}</td>
        <td>{booking.checkOutDate}</td>

        <td>
          {moment(booking.checkOutDate).diff(
            moment(booking.checkInDate),
            "days"
          )}
        </td>
      </tr>
    );
  }
}

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { bookingData: [] };
  }

  render() {
    const results = this.props.results;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>First name</th>
            <th>Surname</th>
            {/* <th>Email</th> */}
            <th>Room ID</th>
            <th>Check in</th>
            <th>Check out</th>
            <th>Number of days</th>
          </tr>
        </thead>
        <tbody>
          {console.log(this.props.results)}
          {results.map((booking, index) => {
            return <Line booking={booking} key={index} />;
          })}
        </tbody>
      </table>
    );
  }
}
export default SearchResults;
