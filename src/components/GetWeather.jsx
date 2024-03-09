import axios from 'axios';
import moment from 'moment-timezone';

const apiID = import.meta.env.VITE_API_KEY;

export const getWeather = async (searchTerm) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=${apiID}`
    );
    const weather = response.data;
    const cnt = 8;
    const forecast = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${weather.coord.lat}&lon=${weather.coord.lon}&cnt=${cnt}&appid=${apiID}`
    );
    
    const dailyForeCast = await axios.get(  
      `https://api.openweathermap.org/data/2.5/forecast?q=${weather.name},${weather.sys.country}&appid=${apiID}`)
    const timezoneId = response.data.timezone;
 const pollution = await axios.get(
   `https://api.openweathermap.org/data/2.5/air_pollution?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid=${apiID}`
 );
    const currentTime = moment().utcOffset(timezoneId / 60);
    const time = currentTime.format('LT');
    const date = currentTime.format('ddd MMMM D, YYYY');

    let message;

    const hour = currentTime.hour();
    if (hour >= 5 && hour < 12) {
      message = 'Good morning';
    } else if (hour >= 12 && hour < 17) {
      message = 'Good afternoon';
    } else {
      message = 'Good evening';
    }

    return {
      weather,
      date: { time, date, message },
      foreCast: forecast.data,
      dailyForeCast: dailyForeCast.data,
      pollution: pollution.data,
      error: null,
    };
  } catch (error) {
    console.error(error.message);
    return {
      weather: null,
      date: null,
      error: error.message,
    };
  }
};






