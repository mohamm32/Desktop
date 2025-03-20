import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [from, setFrom] = useState('Singapore (SIN)');
  const [to, setTo] = useState('Los Angeles (LAX)');
  const [date, setDate] = useState('2023-09-01');

  const handleSearch = () => {
    alert(`Searching from ${from} to ${to} on ${date}`);
  };

  return (
    <div className={styles.searchBar}>
      <h2>Let's explore & travel the world</h2>
      <div className={styles.searchForm}>
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="From"
        />
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="To"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleSearch}>Search Flights</button>
      </div>
    </div>
  );
};

export default SearchBar;