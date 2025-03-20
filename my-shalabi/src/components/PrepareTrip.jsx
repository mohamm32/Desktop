import React from "react";
import "./PrepareTrip.css";

const PrepareTrip = () => {
  const prepareItems = [
    { label: "Hotel", color: "#FECACA", icon: "🛏️" },
    { label: "Attractions", color: "#FDE68A", icon: "🎟️" },
    { label: "Eats", color: "#BBF7D0", icon: "🍽️" },
    { label: "Commute", color: "#BAE6FD", icon: "🚍" },
    { label: "Taxi", color: "#FBCFE8", icon: "🚕" },
    { label: "Movies", color: "#C7D2FE", icon: "🎬" },
  ];

  return (
    <div className="prepare-container">
      <h3 className="prepare-title">PREPARE FOR YOUR TRIP</h3>
      <div className="prepare-items">
        {prepareItems.map((item, idx) => (
          <div key={idx} className="prepare-item">
            <div
              className="prepare-icon"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>
            <p className="prepare-label">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrepareTrip;