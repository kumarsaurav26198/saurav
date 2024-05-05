import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";
import ServiceStack from '../components/Service/ServiceStack'

function Service ()  {
  return (
    <Container fluid className="about-section" id="service">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Best <strong className="yellow">Service </strong>
        </h1>
        <ServiceStack />
      </Container>
    </Container>
  );
};

export default Service;