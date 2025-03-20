import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>FickleFlight</h2>
        <p>
          Fickle Flight is your one-stop travel portal. We offer hassle-free
          flight and hotel bookings. We also have all your flight needs in your
          online shop.
        </p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h3>Company</h3>
          <a href="#">About Us</a>
          <a href="#">News</a>
          <a href="#">Careers</a>
          <a href="#">How we work</a>
        </div>

        <div>
          <h3>Support</h3>
          <a href="#">Account</a>
          <a href="#">Support Center</a>
          <a href="#">FAQ</a>
          <a href="#">Accessibility</a>
        </div>

        <div>
          <h3>More</h3>
          <a href="#">Covid Advisory</a>
          <a href="#">Airline Fees</a>
          <a href="#">Tips</a>
          <a href="#">Quarantine Rules</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;