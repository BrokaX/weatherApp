import { useState, useEffect } from 'react';
import { getLocalStorage } from './../LocalStorage';
import styles from './DataBox.module.css';
import Weather from './DataSections/Weather';
import DailyForeCast from './DataSections/DailyForeCast';
import DayTemp from './DataSections/DayTemp';
import Wind from './DataSections/Wind';

function DataBox() {
  const [{ weather }, setWeather] = useState({});
  const [{ foreCast }, setForeCast] = useState({});
  const [{ dailyForeCast }, setDailyForeCast] = useState({});
  const [{pollution}, setPollution] = useState({});
  const storageKey = localStorage.key(0);

  useEffect(() => {
    if (localStorage.length !== 0) {
      setWeather(getLocalStorage());
      setForeCast(getLocalStorage());
      setDailyForeCast(getLocalStorage());
      setPollution(getLocalStorage());
    }
  }, [storageKey]);

  return (
    <section className={`${styles.container}`}>
      {weather && <Weather weather={weather} />}
      {foreCast && <DayTemp foreCast={foreCast} />}
      {dailyForeCast && <DailyForeCast foreCast={dailyForeCast} />}
      {pollution && <Wind pollution={pollution} />}
    </section>
  );
}

export default DataBox;
