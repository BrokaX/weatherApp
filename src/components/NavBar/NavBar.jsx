import { useState } from 'react';
import axios from 'axios';
import styles from './NavBar.module.css';
import PropTypes from 'prop-types';

export default function NavBar({ results }) {
  const [error, setError] = useState('');
  const [cityWeather, setCityWeather] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const apiID = import.meta.env.VITE_API_KEY;

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=${apiID}`
      );
      setCityWeather(response.data);
      results(response.data);
      console.log(cityWeather);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };
  return (
    <nav className={styles.container}>
      {error && (
        <div className={styles.errorContainer}>
          <div className={styles.errorBox}>
            <button className={styles.errorBtn} onClick={() => setError('')}>
              X
            </button>
            <p className={styles.error}>{error}</p>
            <p>
              Please check the search term `{searchTerm} ` is a correct city
              name then try again
            </p>
          </div>
        </div>
      )}
      <div className={styles.date}>
        <h1 className={styles.time}> 7:32AM</h1>
        <p className={styles.today}> Saturday June 13</p>
        <p className={styles.message}> Good morning from this side</p>
      </div>
      <div className={styles.search}>
        <form className={styles.form} action='submit' onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type='text'
            placeholder='Search for a city'
            onChange={handleChange}
            value={searchTerm}
          />
          <button
            className={styles.submit}
            type='submit'
            onSubmit={handleSubmit}
          >
            <i className='fa-solid fa-search'></i>
          </button>
        </form>
      </div>
      <div className={styles.user}>
        <div className={styles.userIcon}>
          <i className='fa-solid fa-user'></i>
        </div>
        <p className={styles.userName}>UserName</p>
      </div>
    </nav>
  );
}

NavBar.propTypes = {

};
