import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

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
    const [iconLink, setIconLink] = useState(``);
    const [count, setCount] = useState(0);


    useEffect(() => {

        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=4571990276b5d671627c9d2ad6de0012&units=metric')
            .then(function (response) {
                const data = response.data;
                const dt = new Date(response.data.dt * 1000);

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
                setIconLink(`http://openweathermap.org/img/wn/${data.weather.iconID}@2x.png`);
                console.log('update');
            });
    }, []);

    return (
        <StyledWeather>
            <StyledDate>
                {date.month}/{date.date} {date.day[date.dayNum]}
            </StyledDate>
        </StyledWeather>
    );


}

export default Weather;

const StyledWeather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
`

const StyledDate = styled.div`
  size: 3rem;
  font-weight: lighter;
  margin-bottom: 0.5rem;
`
const StyledCityName = styled.div`
`


// const StyledCity = styled


