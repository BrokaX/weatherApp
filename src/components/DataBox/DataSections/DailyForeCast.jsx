import { useState } from 'react';
import styles from './DailyForeCast.module.css';
import PropTypes from 'prop-types';

function DailyForeCast({ foreCast }) {
  const [currentPage, setCurrentPage] = useState(1);

  const dates = (day) => {
    const date = new Date(day * 1000);
    const options = {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    };
    return date.toLocaleDateString('en-US', options);
  };
    const times = (day) => {
      const date = new Date(day * 1000);
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      return date.toLocaleTimeString('en-US', options);
    };

  // Calculate start and end index of items to display for the current page
  const startIndex = (currentPage - 1) * 14;
  const endIndex = startIndex + 14;

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(foreCast.list.length / 14))
    );
  };

  return (
    <section className={styles.container}>
      <div className={styles.forecast}>
        <div className={styles.list}>
          <div className={styles.navigation}>
            <button onClick={handlePrevPage}>
              <i className='fa-solid fa-arrow-left'></i>
            </button>
            <div>10 days interval</div>
            <button onClick={handleNextPage}>
              <i className='fa-solid fa-arrow-right'></i>
            </button>
          </div>
          {foreCast &&
            foreCast.list.slice(startIndex, endIndex).map((day) => (
              <div className={styles.day} key={day.dt}>
                <div className={styles.dayName}>
                  <h4>{dates(day.dt)}</h4>
                  <p className={styles.dayDate}>{times(day.dt)}</p>
                </div>

                <div className={styles.description}>
                  <p className={styles.dayTemp}>
                    {Math.round(day.main.temp - 273.15)}°C
                  </p>
                  <p className={styles.dayDescription}>{day.weather[0].main}</p>
                </div>

                <div className={styles.iconContainer}>
                  <img
                    key={'value'}
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt='Weather icon'
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

DailyForeCast.propTypes = {
  foreCast: PropTypes.object,
};
export default DailyForeCast;
