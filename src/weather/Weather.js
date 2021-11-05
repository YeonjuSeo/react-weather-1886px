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


    return <h>파이팅!!</h>;
}

export default Weather;

const StyledWeatherComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  .date
`
