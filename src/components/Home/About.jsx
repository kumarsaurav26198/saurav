import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Lottie from 'lottie-react';
import about from '../../assets/lottiefiles/about.json'


const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign: "start" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, My name is <span className="yellow">Saurav  </span>
              and I'm from <span className="yellow"> Khagaria, Bihar, India</span>
              <br />
              <br />
              I graduated from <b className="yellow"> Guru Kashi University</b> with a bachelor's degree in computer science.
              <br />
              Having <span className="yellow">3  years</span>  of hands-on experience in  industry as a Software Engineer,
              <br />
              <br />I can help you out with
              <b className="yellow"> React Native  </b>(Android & iOS),
              <b className="yellow"> React Js  </b>(web Application),
              <br />
              <br />
              I am also interested in building new
              <i>
                <b className="yellow"> Web Technologies and Products, </b>
                as well as exploring areas related to
                <b className="yellow"> Artificial Intelligence.</b>
              </i> 
              <br />
              <br />
              {/* As a */}
              {/* <b className="yellow"> React Native  </b>developer,
              I enjoy tackling new challenges and continuously expanding my skillset.
              <br />
              
              as well as have knowledge in programming languages such as C, Java, Python,
              <b className="yellow"> GraphQL, and Solidity.</b>
              <br />
              <br />
              I have a passion for working
              with <b className="yellow">Node.js, MongoDB,</b> and
              <i>
                <b className="yellow">
                  {" "}
                  modern Javascript libraries and frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="yellow"> React.js</b>
              </i>
            */}
              <br />

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            {/* <Lottie animationData={about}  /> */}

              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kumarsaurav26198"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/magnetsaurav"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/saurav-kumar-55b5131ab/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/magnetsaurav/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );

};

export default About;