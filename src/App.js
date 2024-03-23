import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=33a39eabaa2de86ecbb21094b744394c`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      setLocation('');
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
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp}°C</h1> : null}
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name != undefined &&
          <div className='bottom'>
            <div className='feels'>
              <p>Feels Like</p>
              {data.main ? <p className='bold'>{data.main.feels_like}°C</p> : null}
            </div>
            <div className='humidity'>
              <p>Humidity</p>
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            </div>
            <div className='wind'>
              <p>Wind Speed</p>
              {data.wind ? <p className='bold'>{data.wind.speed} km/h</p> : null}
            </div>
          </div>
}
      </div>
    </div>
  );
};

export default App;
