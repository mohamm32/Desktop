import "./PopularStays.css";
import Matterhorn from "../assets/Matterhorn Suites Image.png";
import Discovery from "../assets/Discovery Shores Image.png";
import Arctic from "../assets/Arctic Hut Image.png";
import Lake from "../assets/Lake Louise Image.png";
const stays = [
  {
    title: "Matterhorn Suites",
    type: "Entire bungalow",
    price: "$575/night",
    rating: "4.9",
    reviews: "60 reviews",
    image: Matterhorn ,
  },
  {
    title: "Discovery Shores",
    type: "2-Story beachfront suite",
    price: "$360/night",
    rating: "4.8",
    reviews: "116 reviews",
    image:Discovery,
  },
  {
    title: "Arctic Hut",
    type: "Single deluxe hut",
    price: "$420/night",
    rating: "4.7",
    reviews: "78 reviews",
    image:Arctic ,
  },
  {
    title: "Lake Louise Inn",
    type: "Deluxe King Room",
    price: "$244/night",
    rating: "4.6",
    reviews: "63 reviews",
    image: Lake,
  },
];

export default function PopularStays() {
  return (
    <div className="popular-stays-container">
      <div className="headerstay">
        <h2>Popular Stays</h2>
        <a href="#" className="view-all">View all stays &gt;</a>
      </div>
      <div className="stays-list">
        {stays.map((stay, index) => (
          <div key={index} className="stay-card">
            <img src={stay.image} alt={stay.title} className="stay-image" />
            <div className="stay-info">
              <p className="stay-type">{stay.type}</p>
              <h3 className="stay-title">{stay.title}</h3>
              <p className="stay-price">{stay.price}</p>
              <p className="stay-rating">⭐ {stay.rating} (<a href="#">{stay.reviews}</a>)</p>
              <button className="details-btn">MORE DETAILS</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}