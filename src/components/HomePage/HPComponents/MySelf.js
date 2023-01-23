import React from "react";
import styled from "styled-components";
import { CardsMyself } from "./Myselfcomponts/CardsMyself";

export const MySelf = () => {
  return (
    <SelfStyle>
             <h1>
            Full Stack <span>Developer</span>
          </h1>
        <div className="content">


          <section>
          <img
            alt="./img/IMG_20221222_140056.png"
            src={require("./img/IMG_20221222_140056.png")}
          />  
            <p className="texto1">
              Ambitious junior professional in
              <span> web development</span>, honing my skills and knowledge{" "}
              <span>to improve myself!</span>
            </p>
          </section>
          <CardsMyself />
        </div>
    </SelfStyle>
  );
};

const SelfStyle = styled.div`
  display: block;
  justify-content: center;
  padding: 1rem;
  padding-top: 3rem;
  background-color: #686461;
  min-width: 100vw;
  max-width: max-content;
  color: white;

  .content {
    display: flex;
    flex-direction: row;
    width: 75%;
    justify-content: center;
    background-color: #686461;
    min-height: min-content;
    max-height: max-content;
    margin-top: 0;
    padding-top: 0;
    
  }
  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 80%;
    max-height: max-content;
  }
  h1 {
    color: #f2f2f2;
    padding-top: 3rem;
    text-shadow: #000 0.35rem 0.2rem;
    font-family: "Righteous", cursive;
    padding-right: -0.4rem;
  }
  span {
    color: #ffec78;
  }
  img {
    margin: .05rem;
    padding-top: 2rem;
    width: 11rem ;
    height: 11rem;
    margin-right: .2em;
    margin-left: 0;

  }
  .texto1 {
    padding-left: 2rem;
    color: #f2f2f2;
    padding-top: 1rem;
    font-family: "Poppins", sans-serif;
    font-size: larger;
    padding-top: 3.5rem;
    width: 60%;
  }
`;
