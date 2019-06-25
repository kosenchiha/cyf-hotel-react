import React from "react";
import Clock from "./Clock";

const Heading = () => {
  return (
    <header className="App-header">
      <p>
        <img
          className="App-logo"
          src="https://image.flaticon.com/icons/svg/139/139899.svg"
          alt="logo"
        />
      </p>
      <p className="App-title">CYF Hotel</p>
      <Clock />
    </header>
  );
};

export default Heading;
