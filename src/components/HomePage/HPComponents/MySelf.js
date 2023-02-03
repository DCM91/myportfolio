import React from "react";
import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";
import { CardsMyself } from "./Myselfcomponts/CardsMyself";
import { Partic } from "./Utils/Partic";

export const MySelf = () => {
  return (
    <SelfStyle>
          <Partic />
          <h1>
            Full Stack <span>Developer</span>
          </h1>
        <div className="content">
            
          <section>
            <div>
            <p className="texto1">
              Ambitious junior professional in<br/>
              <TypeAnimation
              sequence={[
              'Web Development',
              2000,
              'Frontend Development',
              2000,
              'Backend Development',
              2000,
              'TDD',
              2000,
              ]}
              speed={30} // Custom Speed from 1-99 - Default Speed: 40
              style={{ fontSize: '1em', color: '#ff760d'  }}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />.
              <br/><br/>
            </p>

            <p className="texto2">
              Honing my skills and knowledge{" "}
              <span>to improve myself!</span>
            </p>
            </div>
          </section>
          <div className="section2">
            <CardsMyself />
          </div>
        </div>
    </SelfStyle>
  );
};

const SelfStyle = styled.div`
  display: block;
  justify-content: center;
  padding-top: 3rem;
  width: 100%;
  color: white;
  height: fit-content;

  .content {
    display: flex;
    flex-direction: row;
    width: 75%;
    justify-content: center;
    min-height: min-content;
    max-height: max-content;
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 1rem;
    
  }
  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    max-height: max-content;
    text-align: center;
    justify-content: center;
  }
  .section2{
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    z-index: 1;
    text-align: center;

  }
  h1 {
    color: #f2f2f2;
    padding-top: 1.5rem;
    text-shadow: #000 0.35rem 0.2rem;
    font-family: "Righteous", cursive;
    padding-right: -0.4rem;
    text-align: center;
    width: 100%;
    z-index: 1;
  }
  span {
    color: #ffec78;
  }
  #tsparticles {

    z-index: 0;
    max-height: fit-content;

  }
  .texto1 {
    color: #f2f2f2;
    font-family: "Poppins", sans-serif;
    font-size: x-large;
    padding-top: .5rem;
    width: 80%;
    padding-left: 1rem;
    text-align: center;
    min-height: fit-content;
    max-height: max-content;
    z-index: 1;
  }
  .texto2{
    color: #f2f2f2;
    font-family: "Poppins", sans-serif;
    font-size: large;
  
    width: 80%;
    padding-left: 1rem;
    text-align: center;
    min-height: fit-content;
    max-height: max-content;
    z-index: 1;
  }
`;
