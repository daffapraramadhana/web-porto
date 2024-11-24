"use client"
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const glitch = keyframes`
  0% {
    text-shadow: 2px 0 red, -2px 0 blue;
    transform: translate(0);
  }
  20% {
    text-shadow: 2px 0 red, -2px 0 blue;
    transform: translate(-5px, 5px);
  }
  40% {
    text-shadow: -2px 0 red, 2px 0 blue;
    transform: translate(-10px, -10px);
  }
  60% {
    text-shadow: -2px 0 red, 2px 0 blue;
    transform: translate(10px, 10px);
  }
  100% {
    text-shadow: 2px 0 red, -2px 0 blue;
    transform: translate(0);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  color: green;
  font-family: "Press Start 2P", cursive;
  font-size: 3rem;
  text-align: center;
  flex-direction: column;

  h1 {
    animation: ${glitch} 1.5s infinite;
  }
`;

const LoadingPages = () => {
  return (
    <LoadingContainer>
      <h1>Loading...</h1>
      <p>Please wait while we load the retro world!</p>
    </LoadingContainer>
  );
};

export default LoadingPages;
