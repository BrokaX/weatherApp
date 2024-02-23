import './DataBox.css';
import PropTypes from 'prop-types';

function DataBox({ weather }) {

  return (
    <section>
      <div className='main-weather-section-left bg'>
        <div className='top'>
 
          {weather && (
            <>
              <img
                key={'value'}
                id='icon'
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt=''
              />
              <h3>{weather.weather[0].main}</h3>
              <h2 id='degree'>{Math.round(weather.main.temp) + ' ℃'} </h2>
              <div className='general-info'>
                <h2 id='city'>{weather.name}</h2>
                <p id='date'>{new Date().toDateString()}</p>
              </div>
            </>
          )}
        </div>
      </div>

      <div className='main-weather-section-right'>
        <div className='top'></div>
      </div>
    </section>
  );
}
DataBox.propTypes = {
  weather: PropTypes.object,
};
export default DataBox;
