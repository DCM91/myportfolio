import React from "react";
import Card from "react-bootstrap/Card";
import { MdWeb, MdOutlineStorage } from "react-icons/md";
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
          <Card.Header>FrontEnd</Card.Header>
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
          <Card.Header>BackEnd</Card.Header>
          <Card.Body>
            <Card.Title className="icono">
              <MdOutlineStorage />
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </CardStyle>
  );
};
const CardStyle = styled.div`
  .icono {
    font-size: xx-large;
    color: #ffec78;

  }
  .cards {
    margin: 2rem;
    margin-bottom: 0rem;
    color: #f2f2f2;
  }
`;
