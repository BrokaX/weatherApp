import { useState } from 'react';
import styles from './SideBar.module.css';
import logo from '/vite.svg';
import PropTypes from 'prop-types';

export default function SideBar({ cityName }) {
  const cities = [
    'Athens',
    'Berlin',
    'London',
    'Paris',
    'venice',
    'Tokyo',
    'Warsaw',
    'Moscow',
    'New York',
    'Budapest',
  ];
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  const results = (city) => {
    cityName(city);
  };



  return (
    <section className={styles.container}>
      <div className={styles.logoBox}>
        <img className={styles.logo} src={logo} alt='App logo' />
        <h1 className={styles.logoTitle}>Weather App</h1>
      </div>
      <nav>
        <div
          onClick={toggleActive}
          className={`${styles.menuItem} ${active ? styles.active : ''}`}
        >
          <i className='fa-solid fa-city'></i>
          <h1>Cities</h1>
        </div>
        {active && (
          <ul className={styles.countries}>
            {cities.map((city) => (
              <li key={city} onClick={()=>results( city)}>
                {city}
              </li>
            ))}
          </ul>
        )}
        <div className={styles.menuItem}>
          <i className='fa-solid fa-map'></i>
          <h1>Map</h1>
        </div>
        <div className={styles.menuItem}>
          <i className='fa-solid fa-location'></i>
          <h1>Location</h1>
        </div>
        <div className={styles.menuItem}>
          <i className='fa-solid fa-calendar'></i>
          <h1>Calendar</h1>
        </div>
        <div className={styles.menuItem}>
          <i className='fa-solid fa-gear'></i>
          <h1>Settings</h1>
        </div>
      </nav>
    </section>
  );
}
SideBar.propTypes = {
  cityName: PropTypes.func,
};