import React from "react";
import "./PopularDestinations.css";

import ParisImg from "../assets/ParisImage.png";
import GreeceImg from "../assets/GreeceImage.png";
import NorwayImg from "../assets/NorwayImage.png";
import TuscanyImg from "../assets/TuscanyImage.png";

const PopularDestinations = () => {
  const destinations = [
    {
      name: "Paris",
      price: "$699",
      fromText: "FROM",
      image: ParisImg,
    },
    {
      name: "Greece",
      price: "$1079",
      fromText: "FROM",
      image: GreeceImg,
    },
    {
      name: "Norway",
      price: "$895",
      fromText: "FROM",
      image: NorwayImg,
    },
    {
      name: "Tuscany",
      price: "$1245",
      fromText: "FROM",
      image: TuscanyImg,
    },
  ];

  return (
    <div className="popular-destinations-container">
      <div className="popular-destinations-header">
        <div className="plan-next-trip">
          <p>PLAN YOUR NEXT TRIP</p>
          <h2>Most Popular Destinations</h2>
        </div>
        <a href="#" className="view-all-destinations">
          View all destinations &gt;
        </a>
      </div>
      <div className="destinations-list">
        {destinations.map((dest, idx) => (
          <div key={idx} className="destination-card">
            <img
              src={dest.image}
              alt={dest.name}
              className="destination-image"
            />
            <div className="destination-info">
              <h3>{dest.name}</h3>
              <p className="price">
                {dest.fromText} {dest.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;