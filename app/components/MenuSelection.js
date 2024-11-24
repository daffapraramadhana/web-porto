"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Howl } from "howler";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  margin-top: 50px;
`;

const MenuItem = styled.div`
  font-family: "Press Start 2P", cursive;
  font-size: 1.5rem;
  color: ${(props) => (props.selected ? "white" : "green")};
  background-color: ${(props) => (props.selected ? "green" : "transparent")};
  padding: 10px 20px;
  margin: 10px 0;
  border: ${(props) =>
    props.selected ? "2px solid white" : "2px solid green"};
  cursor: pointer;
  text-align: center;
  width: 300px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: green;
    color: white;
  }
`;

const MenuSelection = ({ options, onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const moveSoundEffect = new Howl({
    src: ["/sounds/menu.mp3"], // Note the path starts with a leading slash
    volume: 0.5,
  });

  const selectSoundEffect = new Howl({
    src: ["/sounds/menu.mp3"],
    volume: 0.7,
  }); // Sound when selecting

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" || e.key === "w") {
      moveSoundEffect.play(); // Play navigation sound
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
    } else if (e.key === "ArrowDown" || e.key === "s") {
      moveSoundEffect.play(); // Play navigation sound
      setSelectedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
    } else if (e.key === "Enter") {
      selectSoundEffect.play(); // Play selection sound
      onSelect(options[selectedIndex]);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <MenuContainer>
      {options.map((option, index) => (
        <MenuItem
          key={index}
          selected={index === selectedIndex} // Use selected for conditional styling
          onMouseEnter={() => {
            moveSoundEffect.play(); // Play navigation sound on hover
            setSelectedIndex(index);
          }}
          onClick={() => {
            selectSoundEffect.play(); // Play selection sound on click
            onSelect(option);
          }}
        >
          {option}
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default MenuSelection;
