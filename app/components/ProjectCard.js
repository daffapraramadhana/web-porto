"use client";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid green;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.8);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectCard = ({ title, description, link }) => (
  <Card>
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      View Project
    </a>
  </Card>
);

export default ProjectCard;
