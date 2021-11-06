import React, {useState} from "react";
import axios from 'axios';
import styled from "styled-components";

const CITY_NAME="Seoul";
const API_KEY="d81d98d220688fc59c554adb5fdcd766";

export default function Weather() {
  
  const time=new Date().getHours();
  const date = new Date().toDateString();

  const [weatherList, setWeatherList] = useState("");
  
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`).then((Response)=>{
    const data=Response.data;
    setWeatherList({
      temp: data.main.temp,
      main: data.weather[0].main,
      icon: data.weather[0].icon,
    });
  }).catch(error => console.log(error));
  
  const { temp, icon, main } = weatherList;
  
  return (
    <Wrapper time={time}>
      <Day>{date}</Day>
      <Place>{CITY_NAME}</Place>
      <ShowWeather>{main}</ShowWeather>
      <Icon src={`https://openweathermap.org/img/wn/${icon}@2x.png`}/>
      <Temp>{Math.round(temp-273) + " °C"}</Temp>
    </Wrapper>
  );
}

const Time = (time) => {
  if(time >= 6 && time < 18) 
  return true;
  else return false;
};

const Wrapper = styled.div`
  text-align: center;
  border-radius: 1rem;  
  width: 40rem;
  height: 50rem;
  margin: 1rem;
  background-color: ${(props) => (Time(props.time) ? "#ADD8E6" : "#483D8B")};
  color: ${(props) => (Time(props.time) ? "#483D8B" : "#ADD8E6")};
`;

const Day = styled.p`
  font-size: 1.5rem;
`;

const Place = styled.h1`
  margin: 0.5rem;
  font-size: 2rem;
`;

const ShowWeather = styled.h2`
  margin:1rem;
  font-size: 3rem;
  text-align: center;
`;

const Icon = styled.img`
  margin: 0.5rem;
  width: 20rem;
`;

const Temp = styled.h3`
  margin: 0.5rem;
  font-size: 4rem;
`;
