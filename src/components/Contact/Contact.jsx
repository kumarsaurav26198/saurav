import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css';
// import emailjs from 'emailjs-com'; // Import emailjs-com
// import axios from 'axios'; // No need for axios when using EmailJS

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    const serviceId = "YOUR_SERVICE_ID"; // Replace with your EmailJS service ID
    const templateId = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID
    const userId = "YOUR_USER_ID"; // Replace with your EmailJS user ID

    // try {
    //   const res = await emailjs.send(
    //     serviceId,
    //     templateId,
    //     {
    //       from_name: name,
    //       reply_to: email,
    //       message: message
    //     },
    //     userId
    //   );
    //   console.log(res);
    //   setName('');
    //   setEmail('');
    //   setMessage('');
    // } catch (error) {
    //   console.error('Email error:', error);
    // }
  };

  return (
    <Container style={{ paddingTop: '50px' }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact me</h1>
        </Col>
        <Col md={6} className="c-right">
          <form onSubmit={sendEmail}>
            <input type="text" name="from_name" className="user" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" name="reply_to" className="user" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea name="message" className="user" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button type="submit" className="button">Send</Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
