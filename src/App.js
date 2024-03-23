import React, { useState } from 'react';
import axios from 'axios';

function App() {

  //const url = 'https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=33a39eabaa2de86ecbb21094b744394c'

  return (
    <div className="app">
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
            <p>65°C</p>
          </div>
          <div className='humidity'>
            <p>20%</p>
          </div>
          <div className='wind'>
            <p>12 km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
