import React from 'react'
import styled from 'styled-components'
import { CgGym } from "react-icons/cg";
import { SiJordan } from "react-icons/si";
import { IoGameController } from "react-icons/io5";
import { GiCat } from "react-icons/gi";



export const AboutMe = () => {
  return (
    <AbouStyle>
      <div>
          <h3 className='title' href='#action20'>About <span>Me</span></h3>
      </div>
      <div>
          <p className='Aboutme'>
          Soy un apasionado por el aprendizaje y la mejora continua en el sector TIC, y con gran deseo por adquirir nuevos conocimientos y habilidades en este campo.<br />
          <br />

          Durante 10 años, fui autónomo independiente en Barcelona, donde aprendí a trabajar en equipo y a ser resolutivo pero decidí dar un giro a mi carrera y comencé a estudiar desarrollo de software Full Stack.<br/> 
          <br />
          Actualmente, llevo un año dedicado a este campo y me encanta descubrir nuevas tecnologías y herramientas.<br />En mi tiempo libre, disfruto de pasatiempos como la NBA <span><SiJordan/></span>, calistenia <span><CgGym /></span>, videojuegos <span><IoGameController /></span> o de mi compañia felina <span><GiCat/></span>.<br />
          <br />

          En mi portafolio podrá encontrar una variedad de proyectos que he desarrollado y estoy seguro de que podré aportar valor a cualquier equipo en el que tenga la oportunidad de trabajar.

          </p>
      </div>
    </AbouStyle>
  )
}
const AbouStyle= styled.div`

  display: block;
  text-align: center;
  padding: 2rem 4rem;
  text-decoration: none;
  color: white;
  background: radial-gradient(ellipse at bottom,#686461 0,#090a0f 100%);
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: fit-content;
  overflow: hidden;
  z-index: 1;



.Aboutme{
  justify-content: center;
  text-decoration: none;
  color: white;
  width: 95%;
  text-align: start;
  position: static;
  

}
.title{
  text-decoration: none;
  color: white;
  font-family: "Righteous", cursive;
  padding-bottom: 1rem;

  
}
span{
    color: #ff760d ;
  }
`
