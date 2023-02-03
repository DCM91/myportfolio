import React from 'react'
import { useState } from 'react';

import { Button } from 'react-bootstrap';
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';
import styled from 'styled-components';
import { Contact } from './Contact';

export const ContactModal = () => {
    const [modalShow, setModalShow] = useState(false);

  return (
      <ContaSt>
      <div>
        <div className='contact'>
          <Button  variant="secondary" onClick={() => setModalShow(true)}>
            <div className='a'><SiGithub/></div>
            <div className='a'><SiLinkedin/></div>
            <div className='a'><SiGmail/></div>
          </Button>

          <Contact
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
      </ContaSt>
  );
}


const ContaSt = styled.div`


.contact{
  position: fixed;
  top: 35%;
  right: 0;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
}
.a{
  width: 2.5rem;
  height: 2.5rem;
  border: .51 rem  solid #000;
  margin: 0;
  padding: 0;
  font-size: x-large;

}


`