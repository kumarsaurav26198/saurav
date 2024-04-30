import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import Leetcode from "../components/Skillset/Leetcode";
import Github from "../components/Skillset/Github";


function Service ()  {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Best <strong className="yellow">Service </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="yellow">Tools</strong> I use
        </h1>
        <Toolstack />
        <Leetcode />
        <Github />
      </Container>
    </Container>
  );
};

export default Service;