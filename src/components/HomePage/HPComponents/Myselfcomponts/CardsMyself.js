import React from "react";
import Card from "react-bootstrap/Card";
import { MdWeb, MdOutlineStorage, MdScience, MdBuild  } from "react-icons/md";
import styled from "styled-components";

export const CardsMyself = () => {
  return (
    <CardStyle>
      <div>
        <Card
          className="cards"
          border="warning"
          bg="dark"
          style={{ width: "7rem", height: "7.5rem" }}
        >
          <Card.Header>FRONTEND</Card.Header>
          <Card.Body>
            <Card.Title className="icono">
              <MdWeb />
            </Card.Title>
          </Card.Body>
        </Card>

        <Card
          className="cards"
          border="warning"
          bg="dark"
          style={{ width: "7rem", height: "7.5rem" }}
        >
          {" "}
          <Card.Header>BACKEND</Card.Header>
          <Card.Body>
            <Card.Title className="icono">
              <MdOutlineStorage />
            </Card.Title>
          </Card.Body>
        </Card>

        <Card
          className="cards"
          border="warning"
          bg="dark"
          style={{ width: "7rem", height: "7.5rem" }}
        >
          {" "}
          <Card.Header>TOOLS</Card.Header>
          <Card.Body>
            <Card.Title className="icono">
              <MdBuild />
            </Card.Title>
          </Card.Body>
        </Card>

        <Card
          className="cards"
          border="warning"
          bg="dark"
          style={{ width: "7rem", height: "7.5rem" }}
        >
          {" "}
          <Card.Header>TDD</Card.Header>
          <Card.Body>
            <Card.Title className="icono">
              <MdScience />
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </CardStyle>
  );
};
const CardStyle = styled.div`
width: 100%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
font-weight: bold;

  .icono {
    font-size: xx-large;
    color: #ffec78;

  }
  .cards {
    margin: .5rem;
    margin-top: 2rem;
    color: #f2f2f2;
    display: block;
    justify-content: center;
    text-align: center;
  }
`;
