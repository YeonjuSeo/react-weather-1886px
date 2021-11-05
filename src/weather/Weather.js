import React, { useEffect, useState } from "react";

import axios from "axios";

import styled from "styled-components";

const API_KEY = "e8e53ad50d42969e682575d9a0b4fd24";

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
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
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

  const getSeoulWeather = async () => {
    const {
      data: {
        main: { temp },
        name, // Seoul
        weather,
      },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric`
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

  const { name, temp, icon, weather, time } = weatherObj;
  // Set date
  const date = new Date().toDateString();
  const dateLength = date.length;

  return (
    <Wrapper time={time}>
      <Day>{date.slice(0, dateLength - 5)}</Day>
      <Place>{name}</Place>
      <Description>{weather}</Description>
      <Icon src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Temperature>{Math.round(temp) + " °C"}</Temperature>
    </Wrapper>
  );
}

const isDay = (time) => {
  if (time >= 6 && time < 17) return true;
  else return false;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  padding: 5rem 10rem;
  border-radius: 3rem;
  box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
  background-color: ${(props) => (isDay(props.time) ? "#8EC5FC" : "#5c9cc6")};
  background-image: ${(props) =>
    isDay(props.time)
      ? "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"
      : "linear-gradient(135deg, #5c9cc6 0%, #585dbc 100%)"};
  color: ${(props) => (isDay(props.time) ? "black" : "white")};
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
