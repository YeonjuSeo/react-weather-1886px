import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState(0);

  const apiKey = "479bfb3e6f988e03fc0081efb206f596";

  const apiCall = axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${apiKey}`
    )
    .then((res) => {
      setCity(res.data.name);
      setWeather(res.data.weather[0].main);
      setIcon(res.data.weather[0].icon);
      setTemp(res.data.main.feels_like);
    });
  const iconImg = "http://openweathermap.org/img/wn/" + icon + ".png";
  return (
    <div>
      <Icon src={iconImg} />
      <Description>Weather : {weather}</Description>
      <City>City : {city} </City>
      <Temp>Temp:{(temp - 273.15).toFixed(2)}</Temp>
    </div>
  );
}

export default Weather;

const Description = styled.div``;
const City = styled.div``;
const Icon = styled.img``;
const Temp = styled.div``;
