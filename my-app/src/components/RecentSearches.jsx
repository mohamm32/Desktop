import React from 'react';
import styles from './RecentSearches.module.css';

const RecentSearches = () => {
  const searches = [
    { from: 'SIN', to: 'LAX', date: 'Depart On: 7 Sep 2021' },
    { from: 'MY', to: 'DUB', date: 'Depart On: 9 Sep 2021' },

  ];

  const tripOptions = [
    { name: 'Hotel', icon: '🏨', color: '#ff6b6b' },
    { name: 'Attractions', icon: '🗺️', color: '#ff9f43' },
    { name: 'Eats', icon: '🍴', color: '#4caf50' },
    { name: 'Commute', icon: '🚌', color: '#ffcc00' },
    { name: 'Taxi', icon: '🚖', color: '#2196f3' },
    { name: 'Movies', icon: '🎥', color: '#4caf50' },
  ];

  return (
    <div className={styles.recentSearches}>
      <h3>Recent Searches</h3>
      <div className={styles.searchContainer}>
        {searches.map((search, index) => (
          <div key={index} className={styles.searchItem}>
            <span className={styles.from}>{search.from}</span>
            <span className={styles.arrow}>
              <span className={styles.dots}>...</span>
              <span className={styles.plane}>✈️</span>
              <span className={styles.dots}>...</span>
            </span>
            <span className={styles.to}>{search.to}</span>
            <span className={styles.date}>{search.date}</span>
          </div>
        ))}
      </div>
      <h4>Prepare for your Trip</h4>
      <div className={styles.tripOptions}>
        {tripOptions.map((option, index) => (
          <div key={index} className={styles.option} style={{ backgroundColor: option.color }}>
            <span className={styles.icon}>{option.icon}</span>
            <span className={styles.optionName}>{option.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;