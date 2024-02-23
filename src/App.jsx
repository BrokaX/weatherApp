import  { useState, useEffect } from 'react';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [selectedCity, setSelectedCity] = useState('');

  const getCityName = (city) => {
    setSelectedCity(city);
  };
  useEffect(() => {}, [selectedCity]);

  return (
    <div className='App'>
      <SideBar cityName={getCityName} />
      <NavBar cityName={selectedCity} />
    </div>
  );
}

export default App;
