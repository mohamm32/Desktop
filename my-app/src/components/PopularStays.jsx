import React from 'react';
import styles from './PopularStays.module.css';

const stays = [
  { name: 'Matterhorn Suites', image: '/images/MATTERHORN_SUITES.png', price: '$360/night', rating: 4.8 },
  { name: 'Discovery Shores', image: '/images/a.png', price: '$416/night', rating: 4.6 },
  { name: 'Arctic Hut', image: '/images/Arctic Hut Image.png', price: '$420/night', rating: 4.7 },
  { name: 'Lake Louise Inn', image: '/images/Lake Louise Image.png', price: '$418/night', rating: 4.8 },
];

const PopularStays = () => {
  return (
    <div className={styles.popularStays}>
      <div className={styles.header}>
        <h3>Popular Stays</h3>
        <a href="#" className={styles.viewAll}>View all stays</a>
      </div>
      <div className={styles.grid}>
        {stays.map((stay, index) => (
          <div key={index} className={styles.card}>
            <img src={stay.image} alt={stay.name} />
            <h4>{stay.name}</h4>
            <p>{stay.price}</p>
            <p className={styles.rating}> {stay.rating} (reviews)</p>
            <a href="#" className={styles.moreDetails}>More Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularStays;
