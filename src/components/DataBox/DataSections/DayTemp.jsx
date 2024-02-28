import CanvasChart from './Chart';
import styles from './DailyForeCast.module.css';
import PropTypes from 'prop-types';

function DayTemp({ foreCast }) {
  const canvasData = () => {
    const data = [];
    const labels = [];
    const colors = [];
    foreCast.list.map((day) => {
      data.push(day.main.temp);
      labels.push(day.dt_txt);
      colors.push(`hsl(${Math.random() * 360}, 100%, 50%)`);
    });
    return data;
  };
  console.log(foreCast);

  return (
    <section className={styles.container}>
      <div className={styles.forecast}>
        <div className={styles.foreCast}>
          {/* {foreCast &&
            foreCast.list.map((day) => (
              <div className={styles.day} key={day.dt}>
                <div className={styles.dayTitle}>
                  <h4 className={styles.dayName}>{day.dt_txt}</h4>
                  <p className={styles.dayTemp}>{day.main.temp}°C</p>
                
                </div>
              </div>
            ))} */}

          {foreCast && <CanvasChart data={ canvasData()} />}
        </div>
      </div>
    </section>
  );
}

DayTemp.propTypes = {
  foreCast: PropTypes.func,
};
export default DayTemp;
