
import React from 'react';
import styles from './Holidays.module.css';


import baliImage from '../images/baliImage.png';
import ssssssss from '../images/ssssssss.png';
import boracayImage from '../images/boracayImage.png';
import aaaaaa from '../images/aaaaaa.png';

const Holidays = () => {
  const holidays = [
    { name: 'Bali', image: baliImage, price: '$899' }, 
    { name: 'Switzerland', image: ssssssss, price: '$900' },
    { name: 'Boracay', image: boracayImage, price: '$569' },
    { name: 'Palawan', image: aaaaaa, price: '$799' },
  ];

  return (
    <div className={styles.holidays}>
      <div className={styles.header}>
        <h3>Recommended Holidays</h3>
        <a href="#" className={styles.viewAll}>View all holidays</a>
      </div>
      <div className={styles.grid}>
        {holidays.map((holiday, index) => (
          <div key={index} className={styles.card}>
            <img src={holiday.image} alt={holiday.name} className={styles.image} />
            <h4>{holiday.name}</h4>
            <p className={styles.price}>{holiday.price}</p>
            <a href="#" className={styles.moreDetails}>More Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Holidays;