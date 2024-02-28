import styles from './DailyForeCast.module.css';
import PropTypes from 'prop-types';

function DailyForeCast({ foreCast }) {
  console.log(foreCast);

  return (
    <section className={styles.container}>
      <div className={styles.forecast}>
        <div className={styles.foreCast}>
          {foreCast &&
            foreCast.list.map((day) => (
              <div className={styles.day} key={day.dt}>
                <div className={styles.dayTitle}>
                  <h4 className={styles.dayName}>{day.dt_txt}</h4>
                  <p className={styles.dayTemp}>{day.main.temp}°C</p>
                  <p className={styles.dayDescription}>
                    {day.weather[0].description}
                  </p>
                  <p className={styles.dayIcon}>
                    <img
                      key={'value'}
                      src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                      alt='Weather icon'
                    />
                  </p>
                  <p className={styles.dayHumidity}>
                    Humidity: {day.main.humidity}%
                  </p>
                  <p className={styles.dayPressure}>
                    Pressure: {day.main.pressure}hPa
                  </p>
                  <p className={styles.daySunrise}>
                    Sunrise: {day.sys.sunrise}
                  </p>
                  <p className={styles.daySunset}>Sunset: {day.sys.sunset}</p>
  
                  <p className={styles.daySnow}>
                    Snow: {day.snow ? day.snow : 'No Snow'}
                  </p>
                  <p className={styles.dayClouds}>Clouds: {day.clouds.all} %</p>
                  <p className={styles.dayUv}>Temp: {day.main.temp}°C</p>
                  <p className={styles.dayVisibility}>
                    Visibility: {day.visibility}m
                  </p>
                  <p className={styles.dayWindDeg}>Wind Deg: {day.wind.deg}</p>
                  <p className={styles.dayWindGust}>
                    Wind Gust: {day.wind.gust}
                  </p>
                  <p className={styles.dayWindSpeed}>
                    Wind Speed: {day.wind.speed} m/s
                  </p>
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
