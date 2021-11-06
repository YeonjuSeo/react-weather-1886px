import React, {useState, useEffect} from "react";
import axios from "axios";
import styled, {css} from "styled-components";
import {darken} from "polished";

function Weather() {
    const [date, setDate] = useState({
        day: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
        month: 0,
        date: 0,
        dayNum: 0
    });
    const [weather, setWeather] = useState({
        city: '',
        weatherType: '',
        temperature: 0,
        iconID: '',
    });
    const [iconLink, setIconLink] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(() =>{
            setCount(count + 1);
        }, 600000);

        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=b814cccab1d91032fe41ee3c739c213d&units=metric')
            .then(function (response) {

                const data = response.data;
                const dt = new Date(data.dt * 1000);

                setWeather({
                    city: data.name,
                    weatherType: data.weather[0].main,
                    temperature: data.main.temp,
                    iconID: data.weather[0].icon,
                });
                setDate({
                    day: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
                    month: dt.getMonth() + 1,
                    date: dt.getDate(),
                    dayNum: dt.getDay(),
                })
                setIconLink(`'http://openweathermap.org/img/wn/` + weather.iconID + `@2x.png`);
                console.log(weather);
            });
    }, [count]);


    return (
        <StyledWeather time={weather.iconID[2]}>
            <Day>
                {date.month}/{date.date} {date.day[date.dayNum]}
            </Day>
            <City>{weather.city}</City>
            <WeatherType>{weather.weatherType}</WeatherType>
            <WeatherIcon src={iconLink} />
            <Temperature>{weather.temperature} &#8451;</Temperature>
        </StyledWeather>
    );
}

export default Weather;

const StyledWeather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  width: 70%;
  
  ${props =>{
      let color = props.time==='d'? '#aedbfc' : '#575757';
      css`
        background: linear-gradient(to bottom, color 0%, ${darken(0.5, color)} 100%);
      `
  }}
`
const Day = styled.div`
  font-size: 2.5rem;
  font-weight: lighter;
`
const City = styled.div`
  font-size: 7rem;
  font-weight: bolder;
`
const WeatherType = styled.div`
  font-size: 4rem;
`
const WeatherIcon = styled.img`
  display: inline-flex;
  width: 20rem;
`
const Temperature = styled.div`
  font-size: 5rem;
  font-weight: bolder;
`
