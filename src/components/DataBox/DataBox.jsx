import { useEffect, useState } from 'react';
import axios from 'axios'
import './DataBox.css';

function DataBox() {
  const [error, setError] = useState('');
  const [cityWeather, setCityWeather] = useState({});
  const [forecast, setForecast] = useState('');
  const [cityName, setCityName] = useState('');
  const cnt = 8;
  //TO BE HIDDEN LATER
  const apiID = process.env.REACT_APP_API_KEY;

  const submitForm =  function (e) {
    e.preventDefault();
    getCityWeather()

  };
 const getCityWeather = async () => {
    try {
       const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiID}`
    )
    setCityWeather(response.data);
    console.log(cityWeather)
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  }

  const cityForecast = async () => {
    try {
       const response = await axios.get(
         `https://api.openweathermap.org/data/2.5/forecast?lat=${cityWeather.coord.lat}&lon=${cityWeather.coord.lon}&cnt=${cnt}&appid=${apiID}`
       );
       setForecast(response.data);
       console.log(forecast)
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  }

  return (
<section> 
  <div className='search-container'>
    <input type='text' placeholder='Search for a city' onChange={(e) => setCityName(e.target.value)}
    />
    <button onClick={getCityWeather}>Search</button>
    </div>
</section>
  );
}

export default DataBox;
