"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Styled component for the typing effect
const TypingWrapper = styled.div`
  font-family: "Press Start 2P", cursive;
  font-size: 1.5rem;
  color: green;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid green;
  width: fit-content;
  animation: blink 0.7s step-end infinite;

  @keyframes blink {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: green;
    }
  }
`;

export default function TypingText({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    // Reset text each time `text` prop changes
    setDisplayedText("");

    // Use a counter to type each character
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval); // Stop the interval when all characters are typed
      }
    }, speed);

    // Cleanup the interval if the component is unmounted or text changes
    return () => clearInterval(interval);
  }, [text, speed]); // Trigger re-run if `text` prop or `speed` changes

  return <TypingWrapper>{displayedText}</TypingWrapper>;
}
