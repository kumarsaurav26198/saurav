import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css';
import axios from 'axios';
import { apiUri, baseURL } from '../../services/apiEndPoints';

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!fullname) {
      setStatusMessage("⚠️ Please enter your full name.");
      return;
    }
    if (!email) {
      setStatusMessage("⚠️ Please enter your email address.");
      return;
    }
    if (!mobile) {
      setStatusMessage("⚠️ Please enter your mobile number.");
      return;
    }
    if (!description) {
      setStatusMessage("⚠️ Please enter your message or enquiry.");
      return;
    }
    setLoading(true);
    setStatusMessage("");

    try {
      const res = await axios.post(
        baseURL + apiUri.saurav.course_enquiry,
        { fullname, email, mobile, description }
      );

      if (res.status === 201) {
        setStatusMessage("✅ Your enquiry has been sent successfully!");
        setFullname("");
        setEmail("");
        setMobile("");
        setDescription("");
      } else {
        setStatusMessage("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error sending enquiry:", error);
      setStatusMessage("❌ Failed to send enquiry. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container style={{ paddingTop: '50px' }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact Me</h1>
        </Col>
        <Col md={6} className="c-right">
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="fullname"
              className="user"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value)
                    setStatusMessage("")
              }}
            />
            <input
              type="email"
              name="email"
              className="user"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setStatusMessage("")
                setEmail(e.target.value)}}
            />
            <input
              type="text"
              name="mobile"
              className="user"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) =>{ 
                setStatusMessage("")
                setMobile(e.target.value)}}
            />
            <textarea
              name="description"
              className="user"
              placeholder="Your message"
              value={description}
              onChange={(e) => {
                setStatusMessage("")
                setDescription(e.target.value)}}
            />
            {statusMessage && (
              <p style={{ marginTop: 15, color: "white" }}>{statusMessage}</p>
            )}
            <Button
              type="submit"
              className="button"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </Button>

          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
