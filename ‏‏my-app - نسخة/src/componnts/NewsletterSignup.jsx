import "./NewsletterSignup.css";
import backgroundImage from "../assets/Subscribe section background.png";

const NewsletterSignup = () => {
  return (
    <div
      className="newsletter-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="newsletter-content">
        <h3 className="newsletter-title">SUBSCRIBE TO OUR NEWSLETTER</h3>
        <h2 className="newsletter-subtitle">Get weekly updates</h2>
        <div className="newsletter-box">
          <p>Fill in your details to join the party!</p>
          <input type="text" placeholder="Your name" className="input-field" />
          <input type="email" placeholder="Email address" className="input-field" />
          <button className="submit-btn">SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;