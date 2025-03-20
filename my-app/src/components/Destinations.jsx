
import React from 'react';
import styles from './Destinations.module.css';


import parisImage from '../images/ParisImage.png';
import greeceImage from '../images/GreeceImage.png';
import norwayImage from '../images/NorwayImage.png';
import tuscanyImage from '../images/TuscanyImage.png';

const Destinations = () => {
  const destinations = [
    { name: 'Paris', image: parisImage, price: '$599' },
    { name: 'Greece', image: greeceImage, price: '$779' },
    { name: 'Norway', image: norwayImage, price: '$895' },
    { name: 'Tuscany', image: tuscanyImage, price: '$1245' },
  ];

  return (
    <div className={styles.destinations}>
      <div className={styles.header}>
        <h3>Most Popular Destinations</h3>
        <a href="#" className={styles.viewAll}>View all destinations</a>
      </div>
      <div className={styles.grid}>
        {destinations.map((dest, index) => (
          <div key={index} className={styles.card}>
            <img src={dest.image} alt={dest.name} className={styles.image} />
            <h4>{dest.name}</h4>
            <p className={styles.price}>{dest.price}</p>
            <a href="#" className={styles.moreDetails}>More Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;