import Chart from './Chart';
import styles from './DayTemp.module.css';
import PropTypes from 'prop-types';

function DayTemp({ foreCast }) {
  const { list } = foreCast;

  const time = list.map((day) =>
    new Date(day.dt * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
  );

  const temp = list.map((day) => day.main.temp - 273.15);


  return (
    <section className={styles.container}>
      <div className={styles.foreCast}>
        {foreCast && <Chart data={{ time: time, temp: temp }} />}
        <div className={styles.footer}></div>
      </div>
    </section>
  );
}

DayTemp.propTypes = {
  foreCast: PropTypes.object,
};
export default DayTemp;
