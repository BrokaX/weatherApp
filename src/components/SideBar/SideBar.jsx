import { useState } from 'react';
import styles from './SideBar.module.css';
import logo from '/vite.svg';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

export default function SideBar({ cityName }) {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const cities = [
    'Athens',
    'Berlin',
    'London',
    'Paris',
    'Minsk',
    'Tokyo',
    'Warsaw',
    'Moscow',
    'Setif',
    'Budapest',
  ];
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  const results = (city) => {
    cityName(city);
    navigate('/');
  };

const toggleSidebar = () => {
  setOpen(!open);
}

  return (
    <section className={open?`${styles.open}`:styles.closed}>
      <button onClick={toggleSidebar} className={styles.toggle}>
        <i className={`fa-solid fa-angles-${open? 'left': 'right'}`}></i>
      </button>
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
              <li key={city} onClick={() => results(city)}>
                {city}
              </li>
            ))}
          </ul>
        )}
        <Link to='/map'>
          <div className={styles.menuItem}>
            <i className='fa-solid fa-map'></i>
            <h1>Map</h1>
          </div>
        </Link>
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