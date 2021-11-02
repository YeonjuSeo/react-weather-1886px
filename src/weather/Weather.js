import React, { useEffect, useState } from "react";

import axios from "axios";

const API_KEY = "5ff5f673b636e8a4a040a58efff3e499";

export default function Weather() {
  const [weatherObj, setWetherObj] = useState({});

  const getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp }, // 기온
        name, // 지역명
        weather, // weather[0].main -- 날씨
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    const time = new Date().getHours();
    setWetherObj({
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
    console.log("위치를 찾을 수 없습니다.");
    // 서울 날씨 알려주기
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  });

  const { name, temp } = weatherObj;

  return <div>{name + ", " + Math.round(temp) + " °C"}</div>;
}
