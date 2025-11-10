import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from '../assets/about.png';
// import service from '../assets/lottiefiles/services.json';
import an2 from '../assets/lottiefiles/an2.json';


import About from '../components/Home/About';
import Particle from '../components/Particle';
import Lottie from 'lottie-react';
// import Type from '../components/Home/Type';

function Home  () {
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
              <h2 className="heading-name">
                I’m Saurav,
              </h2>
              <h1 className="heading-name">
                A Senior Software Engineer | React Native Specialist | 4+ Years of Experience.
              </h1>
            
              {/* <h1 className="heading-name">
                Freelancer React Native Developer
              </h1> */}
              <h6 className="heading-loacation">
                Freelancing from Khagaria, Bihar, India   {'!  '}
                <span className="wave" role="img" aria-labelledby="wave">
                  🇮🇳
                </span>
              </h6>
              <h6 className="heading-loacation">
                Transforming ideas into beautiful digital experiences that inspire and perform.
              </h6>
              <div style={{ paddingLeft: 10, textAlign: "left", paddingTop: 10 }}>
                {/* <h4 className="heading-para">
                  Best Services
                </h4>
                <ol style={{ textAlign: "left", fontSize: 17 }} type="a">
                  <li>Expo (Mobile Apps CRM )</li>
                  <li>React Native Cli ( Apps)</li>
                  <li>React JS ( Web Application)</li>
                  <li>Android iOS & Web</li>
                </ol>
                <h6 style={{ paddingTop: 30 }}>
                  The best mobile app solution for your business...
                </h6> */}

                {/* <Type /> */}
              </div>
            </Col>

            <Col md={5} >
            {/* <Lottie animationData={an2}  style={{ maxHeight: "450px" ,marginTop:10 }}  className="img-fluid"/> */}
            <Lottie animationData={an2}  />
              {/* <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" ,marginTop:100 }}
              /> */}
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
};

export default Home;