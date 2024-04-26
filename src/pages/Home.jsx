import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/about.png';


import About from '../components/Home/About';
import Particle from '../components/Particle';
import Type from '../components/Home/Type';

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                Saurav Kumar ,
              </h1>
              <h1 className="heading-name">
                React Native Developer
              </h1>
              <h4 className="heading-para">
                Based in Khagaria Bihar, India   {'!  '}
                <span className="wave" role="img" aria-labelledby="wave">
                  🇮🇳
                </span>
              </h4>
              <div style={{ paddingLeft: 40, textAlign: "left", paddingTop: 10 }}>
                <h4>
                I can help you out with...
                </h4>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
};

export default Home;