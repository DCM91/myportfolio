import React from 'react'
import styled from 'styled-components'
import { AboutMe } from './HPcomponents/AboutMe';
import { Hobbies } from './HPcomponents/Hobbies';
import { Skills } from './HPcomponents/Skills';
import { Works } from './HPcomponents/Works';



export const HPInfo = () => {
  return (
    <InfoStyle>
      <div>
        <div className='box' >
          <AboutMe />
        </div>

        <div  className='box2'>
          <Skills />
        </div>

        <div className='box'>
          <Hobbies/>
        </div>

        <div className='box'>
          <Works/>
        </div>
      </div>
    </InfoStyle>
  )
}
const InfoStyle = styled.div`

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
  padding-bottom: 2rem;

  flex-wrap: wrap;
  text-align: center;

}
.HPtitles{
  margin: 1rem;
  padding: 1rem;
  height: 10WH;
  z-index: 1;
  color: #fff;
}
.Aboutme{
  margin-top: 0;
  padding-top: 0;
}
.box2{
  color: #1A2421;
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  max-height: max-content;
  overflow: hidden;

}
`