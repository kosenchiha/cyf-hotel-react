import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristsInfoCards";
import Footer from "./Footer";
import "./App.css";
import Cards from "./data/cardsData.json";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards cards={Cards} />
      <Bookings />
      <Restaurant />
      <Footer
        footerInfo={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
