"use client";
import React from "react";
import styled from "styled-components";

const PersonalPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  height: auto;
  font-family: "Press Start 2P", cursive;
  color: white;
  padding: 20px;

  /* Responsive Styles */
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: green;
  margin-bottom: 20px;

  /* Responsive Styles */
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const InfoCard = styled.div`
  background-color: #2d2d2d;
  border: 2px solid #00ff00;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  margin-top: 20px;
  text-align: center;

  /* Responsive Styles */
  @media (max-width: 768px) {
    padding: 15px;
    max-width: 90%; /* Allow the card to take up more space on smaller screens */
  }
`;

const InfoItem = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;

  /* Responsive Styles */
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const RetroButton = styled.button`
  background-color: #00ff00;
  color: black;
  border: none;
  padding: 10px 20px;
  font-size: 1.5rem;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: black;
    color: #00ff00;
    border: 2px solid #00ff00;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 1rem;
  }
`;

const PersonalPage = () => {
  return (
    <PersonalPageContainer>
      <Title>Hi, I'm Daffa Praramadhana</Title>
      <InfoCard>
        <InfoItem>🎮 Retro Game Enthusiast</InfoItem>
        <InfoItem>🖥️ Front-End Developer</InfoItem>
        <InfoItem>📍 Location: Indonesia</InfoItem>
        <InfoItem>Email: daffa@email.com</InfoItem>
        <InfoItem>GitHub: github.com/daffapr</InfoItem>
      </InfoCard>
      <RetroButton onClick={() => window.history.back()}>Go Back</RetroButton>
    </PersonalPageContainer>
  );
};

export default PersonalPage;
