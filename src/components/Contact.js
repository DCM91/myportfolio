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
            <Form className="formulario">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
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
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            
            <div className='a'><SiGmail/> &nbsp; /castromartindaniel91@gmail.com</div>
            <div className='a'><SiGithub/> &nbsp; /DCM91</div>
            <div className='a'><SiLinkedin/> &nbsp; /dcm91</div>
            </Form>
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
