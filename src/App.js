import React, {useState} from "react";
import "./App.css";
import styled, {createGlobalStyle, css} from "styled-components";
import Weather from "./weather/Weather";
import {darken} from "polished";

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
    const [isDay, setIsDay] = useState([]);
    return (
        <Wrapper className="App" color={isDay}>
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
  background: linear-gradient(to bottom, ${props => props.color[0]} 0%, ${props => props.color[1]} 100%);
  
`