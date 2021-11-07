import React, { useEffect, useState } from "react";

import axios from "axios";

import styled, { keyframes } from "styled-components";

const API_KEY = "8b1aaf9c4909b04edfb789054dfb88f1";

export default function Weather() {
  const [weatherObj, setWeatherObj] = useState({});
  const [loading, setLoading] = useState(true);

  const getWeather = async (api) => {
    const {
      data: {
        main: { temp },
        name, // 지역명
        weather,
      },
    } = await axios.get(api);
    // Set weather object
    const time = new Date().getHours();
    setWeatherObj({
      temp,
      name,
      weather: weather[0].main,
      time,
      icon: weather[0].icon,
    });
    setLoading(false);
  };

  const success = (position) => {
    const { latitude, longitude } = position.coords;
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    getWeather(api);
  };

  const error = (err) => {
    // 위치를 찾지 못하면 서울 날씨 알려주기
    const api = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric`;
    getWeather(api);
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
      {loading ? (
        <>
          <LoadingIcon></LoadingIcon>
        </>
      ) : (
        <>
          <Day>{date.slice(0, dateLength - 5)}</Day>
          <Place>{name}</Place>
          <Description>{weather}</Description>
          <Icon src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
          <Temperature>{Math.round(temp) + " °C"}</Temperature>
        </>
      )}
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
  justify-content: center;
  align-items: center;
  max-width: 50rem;
  width: 80%;
  height: 40rem;
  font-size: 1.6rem;
  border-radius: 3rem;
  box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
  background-color: ${(props) => (isDay(props.time) ? "#8EC5FC" : "#5c9cc6")};
  background-image: ${(props) =>
    isDay(props.time)
      ? "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"
      : "linear-gradient(135deg, #5c9cc6 0%, #585dbc 100%)"};
  color: ${(props) => (isDay(props.time) ? "black" : "white")};
`;

const spin = keyframes`
  to { -webkit-transform: rotate(360deg); }
`;

const LoadingIcon = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: ${spin} 1s ease-in-out infinite;
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
