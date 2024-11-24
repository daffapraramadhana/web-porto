"use client";
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between; /* This will space out the items */
  align-items: center;
  background-color: transparent;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  box-sizing: border-box; /* Prevent padding from affecting layout */
`;

const Character = styled.div`
  font-family: "Press Start 2P", cursive;
  font-size: 2rem;
  color: white;
  margin-left: 10px;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Reduce font size on tablets and smaller */
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; /* Further reduce font size on small screens */
  }
`;

const SpeechBubble = styled.div`
  font-family: "Press Start 2P", cursive;
  background-color: #2d2d2d;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #00ff00;
  position: relative;
  display: inline-block;
  max-width: 200px;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 20px;
    border-width: 10px;
    border-style: solid;
    border-color: #2d2d2d transparent transparent transparent;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Reduce font size of the speech bubble on tablets */
  }

  @media (max-width: 480px) {
    font-size: 0.8rem; /* Further reduce font size of the speech bubble on small screens */
  }
`;

const CopyrightText = styled.div`
  font-family: "Press Start 2P", cursive;
  font-size: 1rem;
  color: green;
  margin-right: 10px;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Reduce font size on tablets */
  }

  @media (max-width: 480px) {
    font-size: 0.8rem; /* Further reduce font size on smaller screens */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Character>
        {/* Retro character represented by an emoji (can be replaced by an image) */}
        <span>👾</span>
      </Character>
      <CopyrightText>&copy; 2024 Deepoy. All Rights Reserved.</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
