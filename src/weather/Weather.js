import React, {useState} from "react";
import axios from "axios";

function Weather() {
    const [date, setDate] = useState(null);
    const [weather, setWeather] = useState({
        city: '',
        date: {},
        weatherType: '',
        temperature: 0,
        iconID: '',
    });
    const [iconLink, setIconLink] = useState('');

    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=4571990276b5d671627c9d2ad6de0012&units=metric')
        .then(function (response) {
            const data = response.data;
            const dt = new Date(data.dt * 1000);

            setDate({
                day: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
                month: dt.getMonth() + 1,
                date: dt.getDate(),
                dayNum: dt.getDay(),
            });
            setWeather({
                city: data.name,
                weatherType: data.weather[0].main,
                temperature: data.main.temp,
                iconID: data.weather[0].icon,
            });
            setIconLink(`http://openweathermap.org/img/wn/${weather.iconID}@2x.png`);

            console.log(Date);
            console.log(weather);
            console.log(iconLink);
        });

    return <h>파이팅!!</h>;
}

export default Weather;

const StyledWeatherComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  .date
`
