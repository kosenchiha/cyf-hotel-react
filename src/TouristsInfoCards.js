import React from "react";
const TouristInfoCards = props => {
  return (
    <div className="card-wrapper">
      {props.cards.map((card, index) => {
        return (
          <div className="card" key={index}>
            <img src={card.imgSource} className="card-img-top" alt="" />
            <p>{card.pText}</p>
            <div className="card-body">
              <a href={card.link} className="btn btn-primary">
                More info
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TouristInfoCards;
