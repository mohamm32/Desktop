
import React from 'react';
import styles from './PopularStays.module.css';


import matterhornImage from '../images/matterhornImage.png';
import discoveryImage from '../images/discoveryImage.png';
import arcticImage from '../images/arcticImage.png';
import lakeLouiseImage from '../images/lakeLouiseImage.png';

const PopularStays = () => {
  const stays = [
    { name: 'Matterhorn Suites', image: matterhornImage, price: '$360/night', rating: 4.8 },
    { name: 'Discovery Shores', image: discoveryImage, price: '$416/night', rating: 4.6 },
    { name: 'Arctic Hut', image: arcticImage, price: '$420/night', rating: 4.7 },
    { name: 'Lake Louise Inn', image: lakeLouiseImage, price: '$418/night', rating: 4.8 },
  ];

  return (
    <div className={styles.popularStays}>
      <div className={styles.header}>
        <h3>Popular Stays</h3>
        <a href="#" className={styles.viewAll}>View all stays</a>
      </div>
      <div className={styles.grid}>
        {stays.map((stay, index) => (
          <div key={index} className={styles.card}>
            <img src={stay.image} alt={stay.name} className={styles.image} />
            <h4>{stay.name}</h4>
            <p className={styles.price}>{stay.price}</p>
            <p className={styles.rating}>⭐ {stay.rating} / 5</p>
            <a href="#" className={styles.moreDetails}>More Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularStays;