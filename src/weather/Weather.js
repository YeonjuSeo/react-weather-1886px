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
      <div className="locationBox">{dateBuilder(new Date())}</div>
    </>
  );
}
export default Weather;
