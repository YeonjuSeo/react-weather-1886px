import React, { useState } from "react";
import "./App.css";
import styled, { createGlobalStyle, css } from "styled-components";
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
  const [cold, setCold] = useState();

  return (
    <Wrapper className="App" cold={cold}>
      <GlobalStyle />
      <Weather setCold={setCold} />
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
  border: 10px solid black;
  background-color: burlywood;
  ${(props) =>
    props.cold === true &&
    css`
      background-color: skyblue;
    `}
`;
