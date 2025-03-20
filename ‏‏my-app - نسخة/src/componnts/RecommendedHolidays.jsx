import React from "react";
import "./RecommendedHolidays.css";
import Bali from "../assets/unsplash_5MV818tzxeo.png";
import Seitz from "../assets/SwitzerlandImage.png";
import Boracay from "../assets/BoracayImage.png";
import Palawan from "../assets/PalawanImage.png";

const RecommendedHolidays = () => {
  const holidays = [
    {
      name: "Bali",
      days: "4D3N",
      price: "$899",
      image:Bali
    },
    {
      name: "Swiss",
      days: "6D5N",
      price: "$900",
      image:Seitz
    },
    {
      name: "Boracay",
      days: "5D4N",
      price: "$699",
      image:Boracay
    },
    {
      name: "Palawan",
      days: "4D3N",
      price: "$789",
      image:Palawan
    }
  ];

  return (
    <div className="recommended-holidays-container">
      <div className="recommended-holidays-header">
        <h2>Recommended Holidays</h2>
        <a href="#" className="view-all-holidays">
          View all holidays &gt;
        </a>
      </div>
      <div className="holidays-list">
        {holidays.map((holiday, index) => (
          <div key={index} className="holiday-card">
            <img
              src={holiday.image}
              alt={holiday.name}
              className="holiday-image"
            />
            <div className="holiday-info">
              <h3>{holiday.name}</h3>
              <p className="days">{holiday.days}</p>
              <p className="price">{holiday.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedHolidays;