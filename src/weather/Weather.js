import React, { useEffect, useState } from "react";

import axios from "axios";

import styled from "styled-components";

const API_KEY = "5ff5f673b636e8a4a040a58efff3e499";

export default function Weather() {
  const [weatherObj, setWeatherObj] = useState({});

  const getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        name, // 지역명
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    // Set weather boject
    const time = new Date().getHours();
    setWeatherObj({
      temp,
      name,
      weather: weather[0].main,
      time,
      icon: weather[0].icon,
    });
  };

  const getSeoulWeather = async () => {
    const {
      data: {
        main: { temp },
        name, // Seoul
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric`
    );
    // Set weather object
    const time = new Date().getHours();
    setWeatherObj({
      temp,
      name,
      weather: weather[0].main,
      time,
      icon: weather[0].icon,
    });
  };

  const success = (position) => {
    const { latitude, longitude } = position.coords;
    getWeather(latitude, longitude);
  };

  const error = (err) => {
    // 위치를 찾지 못하면 서울 날씨 알려주기
    getSeoulWeather();
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  });

  const { name, temp, icon, weather } = weatherObj;
  // Set date
  const date = new Date().toDateString();
  const dateLength = date.length;

  return (
    <Wrapper>
      <Day>{date.slice(0, dateLength - 5)}</Day>
      <Place>{name}</Place>
      <Description>{weather}</Description>
      <Icon src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Temperature>{Math.round(temp) + " °C"}</Temperature>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
`;

const Day = styled.small``;

const Place = styled.h3`
  margin: 0;
  margin: 0.5rem;
`;

const Description = styled.span`
  font-size: 2rem;
`;

const Icon = styled.img`
  width: 20rem;
`;

const Temperature = styled.h1`
  margin: 0;
  font-size: 4rem;
`;
