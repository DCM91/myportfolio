import React from "react";
import styled from "styled-components";
import { CardsMyself } from "./Myselfcomponts/CardsMyself";

export const MySelf = () => {
  return (
    <SelfStyle>
        <div className="content">
          <img
            alt="./img/IMG_20221222_140056.jpg"
            src={require("./img/IMG_20221222_140056.jpg")}
          />
          <section>
            <h1>
              Full Stack <span>Developer</span>
            </h1>
            <p className="texto1">
              Earning my stripes as a dedicated and ambitious junior
              professional in
              <span> web development</span>, honing my skills and knowledge{" "}
              <span>to improve myself!</span>
            </p>
          </section>
          <CardsMyself />
          <CardsMyself />
        </div>
    </SelfStyle>
  );
};

const SelfStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
  padding-top: 3rem;
  background-color: #686461;

  width: 100%;
  color: white;

  .content {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    width: 85%;
    justify-content: center;
    background-color: #686461;
    min-height: min-content;
    max-height: max-content;
    
  }
  section {
    display: flex;
    flex-direction: column;
    width: 60%;
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
    margin: 2rem;
    width: 20%;
    height: 11rem;
    margin-left: 0;
  }
  .texto1 {
    padding-left: 2rem;
    color: #f2f2f2;
    padding-top: 1rem;
    font-family: "Poppins", sans-serif;
    font-size: larger;
  }
`;
