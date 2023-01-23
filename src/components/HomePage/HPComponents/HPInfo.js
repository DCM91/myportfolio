import React from 'react'
import styled from 'styled-components'
import Card from "react-bootstrap/Card";
import { MdOutlinePhonelink  } from "react-icons/md";



export const HPInfo = () => {
  return (
    <InfoStyle>
      <div>
       <h3 className='HPtitles'>About Me</h3>
        <div className='box'>
          <p className='Aboutme'>Mi madre me dijo a mí, que cantara y no llorara, Mi madre me dijo a mí, que cantara y no llorara,Mi madre me dijo a mí, que cantara y no llorara   </p>
        </div>
        <div className='box'>
        <h3 className='HPtitles'>Skills</h3>
          <p>FRONTEND</p>
          <Card
          className="cards"
          border="warning"
          bg="dark"
          style={{ width: "7rem", height: "7.5rem" }}
        >
          {" "}
          <Card.Header>RESPONSIVE</Card.Header>
          <Card.Body>
            <Card.Title className="icono">
              <MdOutlinePhonelink />
            </Card.Title>
          </Card.Body>
        </Card>
        </div>

        <div className='box'>
        <h3 className='HPtitles'>Hobbies</h3>
        </div>

        <div className='box'>
        <h3 className='HPtitles'>My Dev works</h3>

        </div>
      </div>
    </InfoStyle>
  )
}
const InfoStyle = styled.div`

    background-color: #1A2421;
    width: 100%;
    color: #fff;
    min-height: fit-content;
    max-height: max-content;
    font-family: "Poppins", sans-serif;
    display: block;
    justify-content: center;
    text-align: center;
.box{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.HPtitles{
  margin: 1rem;
  padding: 1rem;
  height: 10WH;
}
.Aboutme{
  margin-top: 0;
  padding-top: 0;
}
`