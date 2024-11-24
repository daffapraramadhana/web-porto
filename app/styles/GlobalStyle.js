"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Press Start 2P', cursive;
    background-color: green;  /* Changed background to green */
    color: green;  /* Changed text color to black */
    overflow: hidden;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
  }

.main-title {
  justify-content: center;
  text-align: center;
}

// .main-div {
//  background-color: red;
// }

  .grid-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent 1px, black 1px), /* Change grid line to black */
                linear-gradient(0deg, transparent 1px, black 1px);  /* Change grid line to black */
    background-size: 20px 20px;
    z-index: -1;

    @media (max-width: 768px) {
      background-size: 15px 15px;
    }

    @media (max-width: 480px) {
      background-size: 10px 10px;
    }
  }
`;

export default GlobalStyle;
