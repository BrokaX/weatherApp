import axios from 'axios';

const apiID = import.meta.env.VITE_API_KEY;

export const getWeather = async (e, searchTerm) => {
  e.preventDefault();
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=${apiID}`
    );
    return response.data;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

export const cityForecast = async () => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${cityWeather.coord.lat}&lon=${cityWeather.coord.lon}&cnt=${cnt}&appid=${apiID}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};
