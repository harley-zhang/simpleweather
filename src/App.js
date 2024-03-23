import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=33a39eabaa2de86ecbb21094b744394c'

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      })
    }
  }

  return (
    <div className="app">
      <div className='search'>
        <input
        value={location}
        onKeyPress={searchLocation}
        onChange={event => setLocation(event.target.value)}
        placeholder='Enter Location'
        type="text"
        />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Toronto</p>
          </div>
          <div className='temp'>
            <h1>50°C</h1>
          </div>
          <div className='description'>
            <p>Clouds</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p>Feels Like</p>
            <p className='bold'>65°C</p>
          </div>
          <div className='humidity'>
            <p>Humidity</p>
            <p className='bold'>20%</p>
          </div>
          <div className='wind'>
            <p>Wind Speed</p>
            <p className='bold'>12 km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
