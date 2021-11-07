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
      // console.log(res);
      setCity(res.data.name);
      setWeather(res.data.weather[0].main);
      setIcon(res.data.weather[0].icon);
      setTemp(res.data.main.feels_like);
    });
  const iconImg = "http://openweathermap.org/img/wn/" + icon + "@4x.png";

  return (
    <Wrapper>
      <Today>
        {props.month}/{props.date} {props.day}
      </Today>
      <City>{city} </City>
      <div>
        <Icon src={iconImg} />
        <Description> {weather}</Description>
      </div>
      <Temp>{(temp - 273.15).toFixed(2)}°C</Temp>
    </Wrapper>
  );
}

export default Weather;

const Description = styled.div`
  font-size: 2rem;
`;
const City = styled.div``;
const Icon = styled.img`
  width: 25rem;
  height: 25rem;
`;

const Temp = styled.div``;
const Wrapper = styled.div`
  font-size: 4.5rem;
  color: white;
  @font-face {
    font-family: "EliceDigitalBaeum_Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/EliceDigitalBaeum_Bold.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "EliceDigitalBaeum_Bold";
`;
const Today = styled.div``;
