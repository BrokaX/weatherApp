import { useState, useEffect } from 'react';
import { getLocalStorage } from './../LocalStorage';
import styles from './DataBox.module.css';
import Weather from './DataSections/Weather';
import DailyForeCast from './DataSections/DailyForeCast';
import DayTemp from './DataSections/DayTemp';

function DataBox() {
  const [{ weather }, setWeather] = useState({});
  const [{ foreCast }, setForeCast] = useState({});
  const storageKey = localStorage.key(0);


  useEffect(() => {
    if (localStorage.length !== 0) {
      setWeather(getLocalStorage());
      setForeCast(getLocalStorage());
    }

  }, [storageKey]);

  return (
    <section className={`${styles.container}`}>
      <Weather weather={weather} />
      {/* <DailyForeCast foreCast={foreCast} /> */}
      <DayTemp foreCast={foreCast} />
    </section>
  );
}

export default DataBox;
