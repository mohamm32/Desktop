import React, { useState } from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed: ${name}, ${email}`);
  };

  return (
    <div className={styles.newsletter}>
      <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
      <p className={styles.subtitle}>Get weekly updates</p>
      <p className={styles.details}>Fill in your details to join the party!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Newsletter;