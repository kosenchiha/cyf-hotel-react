import React from "react";
const RestaurantButton = props => {
  return (
    <button onClick={props.addOrder} className="btn btn-primary">
      Add
    </button>
  );
};

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: 0
    };
  }

  addOrder = () => {
    this.setState(current => ({
      orders: current.orders + 1
    }));
  };

  render() {
    return (
      <li>
        {this.props.orderType}: {this.state.orders}
        <RestaurantButton addOrder={this.addOrder} />
      </li>
    );
  }
}

class Restaurant extends React.Component {
  render() {
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <Order orderType="Pizzas" />
          <Order orderType="Salads" />
        </ul>
      </div>
    );
  }
}

export default Restaurant;
