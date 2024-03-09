import { useEffect, useState } from 'react';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';
import DataBox from './components/DataBox/DataBox';
import { getWeather } from './components/GetWeather';
import { setLocalStorage } from './components/LocalStorage';
import Error from './Error/Error';
import Map from './components/Map/Map';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
    <Router>
      <div className='App'>
        <NavBar cityName={getCityName} />

        <div className='app-container'>
          <SideBar cityName={getCityName} />
          <Routes>
            <Route path='/' element={<DataBox weather={results} />} />
            <Route path='/map' element={<Map />} />
          </Routes>

          {errors ? <Error error={errors} reset={reset} /> : ''}
        </div>
      </div>
    </Router>
  );
}

export default App;
