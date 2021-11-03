import styled from "styled-components";
import React from "react";

// const api = {
//   key: "6ee1b6ba59abf58f6806b15abc0815b1",
//   base: "https://api.openweathermap.org/data/2.5/",
// };

function Weather() {
  const dateBuilder = (d) => {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    // sunday 먼저..!!
    let days = ["Sun", "Mon", "Tue", "Wed", "Tur", "Fri", "Sat"];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let date = d.getDate();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <>
      <div className="locationBox">
        <Location>Seoul City, KOREA</Location>
        <DateDiv>{dateBuilder(new Date())}</DateDiv>
      </div>

      <div className="weatherBox">
        <Temperature>15℃</Temperature>
        <WeatherDiv>Sunny</WeatherDiv>
      </div>
    </>
  );
}
export default Weather;

const Location = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 500;
  text-shadow: 2px 2px rgba(30, 50, 50, 0.5);
`;

const DateDiv = styled.div`
  color: white;
  font-size: 20px;
  font-style: italic;
`;

const Temperature = styled.div`
  color: white;
  font-size: 50px;
  margin-top: 1rem;
`;

const WeatherDiv = styled.div`
  color: white;
  font-size: 20px;
  margin-top: 2rem;
`;
