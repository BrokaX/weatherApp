import { useEffect, useState } from 'react';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';
import DataBox from './components/DataBox/DataBox';
import { getWeather } from './components/GetWeather';
import { setLocalStorage, addToLocalStorage } from './components/LocalStorage';
import Error from './Error/Error';

function App() {
  const [cityName, setCityName] = useState(null);
  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState('');

  const getCityName = async (data) => {
    setCityName(data);
  };

  const reset = () => {
    setErrors('');
    setCityName(null);
  };
  const getWeatherData = async (cityName) => {
    try {
      const data = await getWeather(cityName);
      if (data.error !== null) {
        setErrors(data.error);
      }
      setResults(data);
      setLocalStorage(cityName, data);
      addToLocalStorage('cityName', data);
    } catch (error) {
      setErrors(error);
    }
  };

  useEffect(() => {
    if (cityName) {
      getWeatherData(cityName);
    }
  }, [cityName]);

  return (
    <div className='App'>
      <NavBar cityName={getCityName} />
      
      <div className='app-container'>
        <SideBar cityName={getCityName} />
        
        <DataBox weather={results} />
        {errors ? <Error error={errors} reset={reset} /> : ''}
      </div>
    </div>
  );
}

export default App;
