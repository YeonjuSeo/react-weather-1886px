import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const api = {
  key: '676a3313b08ee7007ee86c151dfcdf24',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function Weather() {
  const dateBuilder = (d) => {
    let months = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
    ];
    let days = ['SUN', 'MON', 'TUE', 'WED', 'TUR', 'FRI', 'SAT'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${year} ${month}/${date} ${day}   `;
  };

  return (
    <div className="weather">
      <main>
        <WebBox>
          <div className="TopBox">
            <TodayDate>{dateBuilder(new Date())}</TodayDate>
            <Location>Seoul</Location>
            <TodayWeather>Sunny</TodayWeather>
          </div>
          <div className="weatherBox">
            <Temp>15&deg;C</Temp>
          </div>
        </WebBox>
      </main>
    </div>
  );
}

const WebBox = styled.div`
  padding-top: 10rem;
  opacity: 0.8;
`;

const Location = styled.div`
  color: white;
  font-size: 5rem;
  font-weight: 500;
  text-allign: center;
`;

const TodayDate = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 500;
  text-allign: center;
`;

const TodayWeather = styled.div`
  color: white;
  font-size: 3rem;
  font-weight: 500;
  text-allign: center;
`;

const Temp = styled.div`
  color: #e6e6fa;
  font-size: 8rem;
  font-weight: 500;
  text-allign: center;
  padding-top: 20rem;
`;

export default Weather;
