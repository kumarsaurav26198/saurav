import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";
import ServiceStack from '../components/Service/ServiceStack'
import Toolstack from "../components/Service/Toolstack";
import Github from "../components/Skillset/Github";

function Service ()  {
  return (
    <Container fluid className="about-section" id="service">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Best <strong className="yellow">Service </strong>
        </h1>
        <ServiceStack />
        <h1 className="project-heading">
          <strong className="yellow">Tools</strong> I use
        </h1>
        <Toolstack/>
        <Github />
      </Container>
    </Container>
  );
};

export default Service;