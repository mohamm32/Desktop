import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <h4>FickleFlight</h4>
        <p>
          FickleFlight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in you online shop.
        </p>
        <div className={styles.socialIcons}>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>
      <div className={styles.footerSection}>
        <h4>Company</h4>
        <p><a href="#">About Us</a></p>
        <p><a href="#">News</a></p>
        <p><a href="#">Careers</a></p>
        <p><a href="#">How we work</a></p>
      </div>
      <div className={styles.footerSection}>
        <h4>Support</h4>
        <p><a href="#">Account</a></p>
        <p><a href="#">Support Center</a></p>
        <p><a href="#">FAQ</a></p>
        <p><a href="#">Accessibility</a></p>
      </div>
      <div className={styles.footerSection}>
        <h4>More</h4>
        <p><a href="#">Covid Advisory</a></p>
        <p><a href="#">Airline Fees</a></p>
        <p><a href="#">Tips</a></p>
        <p><a href="#">Quarantine Rules</a></p>
      </div>
    </footer>
  );
};

export default Footer;