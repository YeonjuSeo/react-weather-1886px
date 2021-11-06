import React from "react";
import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import Weather from "./weather/Weather";

const GlobalStyle = createGlobalStyle`
  *{  
    box-sizing: border-box;
  }
  html {
    font-size : 10px;
  }
  body {
    width: 100%;
    margin: 0;
  }
`;
function App() {
  const today = new Date();
  const hours = today.getHours();
  const month = today.getMonth();
  const date = today.getDate();
  const WEEKDAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const day = WEEKDAY[today.getDay()];

  function isDay(hours) {
    if (hours >= 6 && hours <= 17) return true;
  }

  return (
    <Wrapper className="App" isDay={isDay(hours)}>
      <GlobalStyle />
      <Weather month={month} date={date} day={day} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: ${(props) =>
    props.isDay
      ? "linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)"
      : "linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)"};
`;
