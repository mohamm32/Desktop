import React from 'react';
import styles from './Holidays.module.css';

const holidays = [
  { name: 'Bali', image: '/images/b.png', price: '$899' }, 
  { name: 'Switzerland', image: '/images/SwitzerlandImage.png', price: '$900' },
  { name: 'Boracay', image: '/images/BoracayImage.png', price: '$569' },
  { name: 'Palawan', image: '/images/PalawanImage.png', price: '$799' },
];

const Holidays = () => {
  return (
    <div className={styles.holidays}>
      <div className={styles.header}>
        <h3>Recommended Holidays</h3>
        <a href="#" className={styles.viewAll}>View all holidays</a>
      </div>
      <div className={styles.grid}>
        {holidays.map((holiday, index) => (
          <div key={index} className={styles.card}>
            <img src={holiday.image} alt={holiday.name} />
            <h4>{holiday.name}</h4>
            <p>{holiday.price}</p>
            <a href="#" className={styles.moreDetails}>More Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Holidays;