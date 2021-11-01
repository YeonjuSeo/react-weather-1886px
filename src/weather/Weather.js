import React, { useEffect } from "react";

import axios from "axios";

const API_KEY = "5ff5f673b636e8a4a040a58efff3e499";

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
};

const success = (position) => {
  const { latitude, longitude } = position.coords;
  getWeather(latitude, longitude);
};

const error = (err) => {
  console.log("위치를 찾을 수 없습니다.");
  // 서울 날씨 알려주기
};

function Weather() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  });
  return <div>벗들 화이팅!!</div>;
}

export default Weather;
