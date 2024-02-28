import styles from './Weather.module.css';
import PropTypes from 'prop-types';
import arrow from '/src/assets/arrow.svg';

function Weather({ weather }) {
  const formatTime = (time) => {
    return new Date(time * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(/src/assets/${weather?.weather[0].main}.jpg)`,
        backgroundPosition: 'center',
      }}
    >
      <div className={styles.mainWeather}>
        {weather && (
          <>
            <dir className={styles.location}>
              <i className='fa-solid fa-location-dot'></i>
              <h3>
                {weather.name} | {weather.sys.country}
              </h3>
            </dir>
            <div className={styles.icon}>
              <img
                key={'value'}
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt='Weather icon'
              />
              <h3 className={styles.description}>
                {weather.weather[0].description}
              </h3>
            </div>

            <h2 className={styles.degrees}>{Math.round(weather.main.temp)}</h2>
            <h3>{weather.weather[0].main}</h3>

            <div className={styles.info}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <i className={`fa-solid fa-water ${styles.faIcons}`}></i>
                  <h3>Pressure {weather.main.pressure}</h3>
                </div>
                <div className={styles.column}>
                  <i className={`fa-solid fa-wind ${styles.faIcons}`}></i>
                  <h3>Speed {weather.wind.speed} km/h</h3>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.column}>
                  <i className={`fa-solid fa-droplet ${styles.faIcons}`}></i>
                  <h3>Humid {weather.main.humidity}%</h3>
                </div>
                <div className={styles.column}>
                  <i className={`fa-solid fa-wind ${styles.faIcons}`}></i>
                  <h3>
                    Direction {weather.wind.deg}{' '}
                    <span>
                      <img
                        className={styles.wind}
                        src={arrow}
                        alt=''
                        style={{
                          transform: `rotate(${weather.wind.deg}deg)`,
                        }}
                      />
                    </span>
                  </h3>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.column}>
                  <i className={`fa-solid fa-sun ${styles.faIcons}`}></i>
                  <h3>Rise {formatTime(weather.sys.sunrise)}</h3>
                </div>

                <div className={styles.column}>
                  <i className={`fa-solid fa-moon ${styles.faIcons}`}></i>
                  <h3>Set {formatTime(weather.sys.sunset)}</h3>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
Weather.propTypes = {
  weather: PropTypes.object,
};
export default Weather;
