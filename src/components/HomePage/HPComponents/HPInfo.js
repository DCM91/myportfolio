import React from 'react'
import styled from 'styled-components'
import { AboutMe } from './HPcomponents/AboutMe';
import { Skills } from './HPcomponents/Skills';



export const HPInfo = () => {
  return (
    <InfoStyle>
      <div>
        <div className='box' >
          <AboutMe />
        </div>

        <div  className='box'>
          <Skills />
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
  min-height: fit-content;
  max-height: max-content;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.HPtitles{
  margin: 1rem;
  padding: 1rem;
  height: 10WH;
  z-index: 1;
}
.Aboutme{
  margin-top: 0;
  padding-top: 0;
}
`