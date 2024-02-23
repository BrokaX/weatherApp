import React, { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';
import DataBox from './components/DataBox/DataBox';

function App() {
  const [cityWeather, setCityWeather] = useState(null);
  const [results, setResults] = useState(null);

  const getCityWeather = (weather) => {
    setCityWeather(weather);
    // Clear results when cityWeather is updated
    setResults(null);
  };

  const getResults = (weather) => {
    setCityWeather(null);
    setResults(weather);
  };

  return (
    <div className='App'>
      <SideBar cityWeather={getCityWeather} />
      <div>
        <NavBar results={getResults} />
        <DataBox weather={cityWeather || results} />
      </div>
    </div>
  );
}

export default App;
