import React from 'react';
import styles from './Destinations.module.css';

const destinations = [
  { name: 'Paris', image:  '/images/ParisImage.png', price: '$599' },
  { name: 'Greece', image: '/images/GreeceImage.png', price: '$779' },
  { name: 'Norway', image: '/images/NorwayImage.png', price: '$895' },
  { name: 'Tuscany', image: '/images/TuscanyImage.png', price: '$1245' },
];

const Destinations = () => {
  return (
    <div className={styles.destinations}>
      <div className={styles.header}>
        <h3>Most Popular Destinations</h3>
        <a href="#" className={styles.viewAll}>View all destinations</a>
      </div>
      <div className={styles.grid}>
        {destinations.map((dest, index) => (
          <div key={index} className={styles.card}>
            <img src={dest.image} alt={dest.name} />
            <h4>{dest.name}</h4>
            <p>{dest.price}</p>
            <a href="#" className={styles.moreDetails}>More Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;