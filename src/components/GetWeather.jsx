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
    
    const dailyForeCast = await axios.get(  `https://api.openweathermap.org/data/2.5/forecast?q=${weather.name},${weather.sys.country}&appid=${apiID}`)
    const timezoneId = response.data.timezone;

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


// Hourly Forecast


// Daily Forecast
export const dailyForecast = async (city, countryCode) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city},${countryCode}&appid=${apiID}`
    );
    const dailyForecast = response.list.map((dayData) => {
      return {
        date: new Date(dayData.dt * 1000).toLocaleDateString(),
        maxTemperature: dayData.temp.max,
        minTemperature: dayData.temp.min,
        weatherDescription: dayData.weather[0].description,
        precipitationProbability: dayData.pop,
        windSpeed: dayData.speed,
        windDirection: dayData.deg,
        uvIndex: dayData.uvi,
        moonPhase: dayData.moon_phase,
      };
    });
    return dailyForecast;
  } catch (error) {
    console.error('Error getting daily forecast:', error);
  }
};

// Weather Alerts (Example: Not all locations have alerts)
export const alert = async (city, countryCode) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/alerts?q=${city},${countryCode}&appid=${apiID}`
    );
    return response.data;
  } catch (error) {
    console.error('Error getting weather alerts:', error);
  }
};

// Air Pollution Data
export const airPllution = async (latitude, longitude) => {
  try {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiID}`
    );
    return response.data;
  } catch (error) {
    console.error('Error getting air pollution data:', error);
  }
};

// Historical Weather Data
export const historicalForecast = async (
  latitude,
  longitude,
  startDate,
  endDate
) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${latitude}&lon=${longitude}&start=${startDate}&end=${endDate}&appid=${apiID}`
    );
    return response.data;
  } catch (error) {
    console.error('Error getting historical weather data:', error);
  }
};


