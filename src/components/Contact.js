import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { Form } from "react-bootstrap";

export const Contact = (props) => {
  return (
    <ContactStyle>
      <div>
        <Modal {...props} size="lg" centered>
          <Modal.Body>
          <Modal.Title>
              <p> Contact Me</p>
          </Modal.Title>
          <div className="bodycon">
            <div className="part1">
            <Form className="formulario">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email me</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" placeholder="Message me :)" rows={3} />
              </Form.Group>
            
            <div className='a'><SiGmail/> &nbsp; /castromartindaniel91@gmail.com</div>
            <div className='a'><SiGithub/> &nbsp; /DCM91</div>
            <div className='a'><SiLinkedin/> &nbsp; /dcm91</div>
            </Form>
            </div>
            <div className="part2">
                <div className="mifoto"><img style={ {width : "100%", height : "100%", borderRadius: "10%"}} src={require('./HomePage/HPComponents/img/MiFoto.jpg')} alt="hola" /></div>
               { /*aqui va una foto */}
            </div>
          </div>
          </Modal.Body>
          <Modal.Footer className="footer">
            <Button variant="danger" onClick={props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      
    </ContactStyle>
  );
};
const ContactStyle = styled.div`

`;
