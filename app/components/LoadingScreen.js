"use client"
import styled, { keyframes } from "styled-components";
import React from "react";

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Press Start 2P", cursive;
  z-index: 1000;
  padding: 20px;
  box-sizing: border-box;
`;

const LoadingText = styled.div`
  font-size: 1.5rem;
  margin-bottom: 20px;
  animation: ${blink} 1s infinite;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ProgressBarWrapper = styled.div`
  width: 80%;
  max-width: 600px;
  height: 20px;
  background: rgba(0, 255, 0, 0.2);
  border: 1px solid green;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 480px) {
    height: 10px;
  }
`;

const ProgressBar = styled.div`
  width: 0;
  height: 100%;
  background: green;
  animation: loading 3s ease-out forwards;

  @keyframes loading {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
`;

const LoadingScreen = ({ onComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <LoadingWrapper>
      <LoadingText>Loading...</LoadingText>
      <ProgressBarWrapper>
        <ProgressBar />
      </ProgressBarWrapper>
    </LoadingWrapper>
  );
};

export default LoadingScreen;
