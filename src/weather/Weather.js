import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

function Weather(props) {
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
    <Wrapper>
      <Today>
        {props.month}/{props.date} {props.day}
      </Today>
      <City>{city} </City>
      <Icon src={iconImg} />
      <Description> {weather}</Description>

      <Temp>{(temp - 273.15).toFixed(2)}°C</Temp>
    </Wrapper>
  );
}

export default Weather;

const Description = styled.div``;
const City = styled.div``;
const Icon = styled.img`
  width: 25rem;
  height: 25rem;
`;

const Temp = styled.div``;
const Wrapper = styled.div`
  font-size: 4.5rem;
  color: white;
`;
const Today = styled.div``;
