import React, {useState} from "react";
import "./App.css";
import styled, {createGlobalStyle, css} from "styled-components";
import Weather from "./weather/Weather";

const axios = require('axios').default;
const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    
    html {
      font-size: 10px;
    }
    
    body {
      width: 100%;
      margin: 0;
    }
`;

function App() {
    const [isDay, setIsDay] = useState(true);
    const dayColor = ['#7fc0f0', '#249af0'];
    const nightColor = ['#2e2e2e', '#000000'];
    return (
        <Wrapper className="App" isDay={isDay} dayColor={dayColor} nightColor={nightColor}>
            <GlobalStyle />
            <Weather isDay={isDay} setIsDay={setIsDay}/>
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
  ${props => {
    const color = props.isDay ? props.dayColor : props.nightColor;
    return css`
      background: linear-gradient(to bottom, ${color[0]} 0%, ${color[1]} 100%);
    `
  }}
`