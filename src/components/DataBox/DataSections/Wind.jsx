import styles from './Wind.module.css';
import PropTypes from 'prop-types';

function Wind({ pollution }) {
  
  const aqiLevels = [
    { value: 1, description: 'Good', color: 'green' },
    { value: 2, description: 'Fair', color: 'yellow' },
    { value: 3, description: 'Moderate', color: 'orange' },
    { value: 4, description: 'Poor', color: 'red' },
    { value: 5, description: 'Very Poor', color: 'purple' },
  ];

  const getAQIDescription = (aqi) => {
    const level = aqiLevels.find((level) => level.value === aqi);
    return level ? level.description : '';
  };

  const getAQIColor = (aqi) => {
    const level = aqiLevels.find((level) => level.value === aqi);
    return level ? level.color : 'black';
  };
  const getAQIBarWidth = (aqi) => {
    // Convert AQI value to percentage for bar width
    return `${(aqi / 5) * 100}%`;
  };
  return (
    <section className={styles.container}>
      <div className={styles.section}>
        {pollution.list.map((data, index) => (
          <div key={index}>
            <div className={styles.data}>
              <div>
                Air Quality Index:
                <p style={{ color: getAQIColor(data.main.aqi) }}>
                  {data.main.aqi} - {getAQIDescription(data.main.aqi)}
                </p>
              </div>
              <div className={styles.aqiContainer}>
                <div
                  className={styles.aqiBar}
                  style={{
                    width: getAQIBarWidth(data.main.aqi),
                    backgroundColor: getAQIColor(data.main.aqi),
                  }}
                >
                  {data.main.aqi}
                </div>
              </div>
            </div>
            <div className={styles.details}>
              <p>
                CO (Carbon monoxide): <span> {data.components.co} μg/m³</span>
              </p>
              <p>
                NO (Nitrogen monoxide): <span> {data.components.no} μg/m³</span>
              </p>
              <p>
                NO2 (Nitrogen dioxide):
                <span> {data.components.no2} μg/m³</span>
              </p>
              <p>
                O3 (Ozone): <span> {data.components.o3} μg/m³</span>
              </p>
              <p>
                SO2 (Sulphur dioxide): <span> {data.components.so2} μg/m³</span>
              </p>
              <p>
                PM2.5 (Fine particles matter):
                <span> {data.components.pm2_5} μg/m³</span>
              </p>
              <p>
                PM10 ( Particulate matter):
                <span> {data.components.pm10} μg/m³</span>
              </p>
              <p>
                NH3 (Ammonia): <span> {data.components.nh3} μg/m³</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.section}>SECTION</div>
      <div className={styles.section}>SECTION</div>
      <div className={styles.section}></div>
    </section>
  );
}

Wind.propTypes = {
  pollution: PropTypes.object,
};
export default Wind;
