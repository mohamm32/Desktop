import React, { useState } from 'react';
import styles from './Header.module.css';
import { FaBell, FaBars } from 'react-icons/fa'; 
import hedar from '../images/photot.jpg';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>FickleFlight</h1>
      </div>

      <div className={styles.rightSection}>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Hotels</a></li>
            <li><a href="#">Offers</a></li>
          </ul>
        </nav>

        <div className={styles.icons}>
          <FaBell className={styles.bellIcon} />
          <img
            src={hedar}
            alt="User Profile"
            className={styles.profilePic}
          />
        </div>
      </div>

      <button className={styles.menuToggle} onClick={toggleMenu}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;