import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css';
import axios from 'axios';
const Contact = () => {

  // const form = useRef();
  // const [ done, setDone ] = useState("");
  // const [ notDone, setNotDone ] = useState("");
  // const [ formData, setFormData ] = useState("");

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [ e.target.name ]: e.target.value });
  //   setDone(false);
  //   setNotDone(false);
  // };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   if (!formData.from_name || !formData.reply_to || !formData.message)
  //   {
  //     setNotDone(true);
  //   } else
  //   {

  //     //  Please use your own credentials from emailjs or i will recive your email

  //     emailjs
  //       .sendForm(
  //         "service_ep2gwr7",
  //         "template_x5g4a3c",
  //         form.current,
  //         "sf2LTK8jQbvGtC2nr"
  //       )
  //       .then(
  //         (result) => {
  //           console.log(result.text);
  //           setDone(true);
  //         },
  //         (error) => {
  //           console.log(error.text);
  //         }
  //       );
  //   }
  // };
  // const form = useRef();
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    const serviceId = "service_ep2gwr7";
    const templateId = "template_x5g4a3c";
    const publicKey = "sf2LTK8jQbvGtC2nr";


    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Ashish",
        message: message
      }
    };
    try
    {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error)
    {
      console.error(error);
    }

    ;

  };


  return (
    <Container style={{ paddingTop: '50px' }} >
      <Row >
        <Col md={6} className="c-left" >
          <h1 >Get in Touch</h1>
          <h1 className="yellow">Contact me</h1>
        </Col>
        <Col md={6} className="c-right">
          {/* <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" className="user" placeholder="Name" onChange={handleChange} />
            <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
            <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
            <span className='not-done' >{notDone && "Please, fill all the input field"}</span>
            <Button type="submit" className="button" disabled={done}>Send</Button>
            <span className='done'>{done && "Thanks for contacting me and be sure i have recieved your mail."}</span>
          </form> */}
          <form onSubmit={sendEmail}>
            <input type="text" name="from_name" className="user" placeholder="Name" onChange={((e) => setName(e.target.value))} />
            <input type="email" name="reply_to" className="user" placeholder="Email" onChange={((e) => setEmail(e.target.value))} />
            <textarea name="message" className="user" placeholder="Message" onChange={((e) => setMessage(e.target.value))} />
            <Button type="submit" className="button" >Send</Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;