import { useEffect, useState } from 'react';
import styles from './NavBar.module.css';
import PropTypes from 'prop-types';
import { getLocalStorage } from '../LocalStorage';

export default function NavBar({ cityName }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [{date}, setDate] = useState({});
    const storageKey = localStorage.key(0);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   cityName(searchTerm);
  };
  

  useEffect(() => {
    if (localStorage.length !== 0) {
      setDate(getLocalStorage());
    }
  }, [storageKey ]);


  return (
    <nav className={styles.container}>
      {date ? (
        <div className={styles.date}>
          <h1 className={styles.time}>{date.time}</h1>
          <p className={styles.today}>{date.date}</p>
          <p className={styles.message}>{date.message}</p>
        </div>
      ) : (
        <div className={styles.date}>
          <h1 className={styles.time}>date</h1>
          <p className={styles.today}>time</p>
          <p className={styles.message}>message</p>
        </div>
      )}

      <div className={styles.search}>
        <form className={styles.form} action='submit' onSubmit={handleSubmit}>
          <input
            name='search'
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
  cityName: PropTypes.func,
};
