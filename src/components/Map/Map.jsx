import { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';
import { getLocalStorage } from './../LocalStorage';

const WorldMap = () => {
  const apiID = import.meta.env.VITE_API_KEY;
  const { weather } = getLocalStorage();
  const [zoomLevel, setZoomLevel] = useState(2);

  
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([0, 0], zoomLevel);

      // OpenStreetMap layer

      const osmLayer = L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }
      ).addTo(mapRef.current);

      // Weather map layers
      const layerNames = [
        'clouds_new',
        'precipitation_new',
        'pressure_new',
        'wind_new',
      ];
      const layers = {};
      layerNames.forEach((layerName) => {
        layers[layerName] = L.tileLayer(
          `https://tile.openweathermap.org/map/${layerName}/{z}/{x}/{y}.png?appid=${apiID}`,
          { apiID: apiID, maxZoom: 19 }
        );
      });

      // Add layers control
      L.control
        .layers({ OpenStreetMap: osmLayer }, layers)
        .addTo(mapRef.current);

    }
  }, [apiID, zoomLevel]);

  useEffect(() => {
    if (mapRef.current && weather) {
      setZoomLevel(10);
      const coordinates = [weather.coord.lat, weather.coord.lon];
      mapRef.current.setView(coordinates, zoomLevel);

      // Clear existing markers
      mapRef.current.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          mapRef.current.removeLayer(layer);
        }
      });

      // Add new marker with popup
      const marker = L.marker(coordinates).addTo(mapRef.current);
      marker
        .bindPopup(
          `<b>${weather.name}</b><br>Temperature: ${weather.main.temp}°C<br>Humidity: ${weather.main.humidity}%`
        )
        .openPopup();
    }
  }, [weather, zoomLevel]);

  return (
    <section className={styles.container}>
      <div className={styles.mapControls}>

      </div>
      <div className={styles.mapContainer}>
        <div id='map' style={{ width: '100%', height: '100%' }} />
      </div>
    </section>
  );
};

export default WorldMap;
