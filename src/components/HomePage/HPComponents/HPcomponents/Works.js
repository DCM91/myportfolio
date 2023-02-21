import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

export const Works=()=> {
  return (
    <WorksStyle>
      <h3 className='HPtitles'>My <span>Dev</span> works</h3>
    <div>


    <div style={{  padding: '1rem', margin: '0 1rem', width: '100%', justifyContent: 'flex-start'}}>
    <Card className='workcard'>
      <Card.Img variant="top" src={require('../img/skuadlack.png')}  />
      <Card.Body >
        <Card.Title>Slack <span> Clone</span></Card.Title>
        <Card.Text>
        This is the largest project I've completed as a Full Stack developer. 
        It's a clone of Slack that can register users, create organizations, send direct messages and create channels among users within an organization.
        {/*Este es el mayor proyecto realizado como FullStack, se trata de un clon de slack capaz de registrar usuarios, crear organizaciones,
          enviar mensajes directos y creacion de canales entre usuarios en una organizacion*/}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"><a href='https://skuadlack.netlify.app/'>Visit Skuadlack</a> </small>
      </Card.Footer>
    </Card>
     </div>


     <div style={{  padding: '1rem', margin: '0 1rem', width: '100%', justifyContent: 'flex-end'}}>
    <Card className='workcard' >
    <Card.Img variant="top" src={require('../img/pokedex.png')} />
      <Card.Body>
        <Card.Title>Pokedex<span>JSX</span></Card.Title>
        <Card.Text>
        This is my first Front End project which makes requests to an API (pokeAPI), showcasing my first steps with the fetch function.
        {/*Este es mi primer proyecto de Front que hace peticiones a una API (pokeAPI) mostrando mis primeros pasos con la función fetch */}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"><a href='https://dcm91.github.io/pokedexJSX/'>Visit my pokedex</a></small>
      </Card.Footer>
    </Card>
    </div>


    <div style={{  padding: '1rem', margin: '0 1rem', width: '100%', justifyContent: 'flex-start'}}>
    <Card className='workcard' >
    <Card.Img variant="top" src={require('../img/blockbuster.png')}  />
      <Card.Body>
        <Card.Title>Block<span>buster</span></Card.Title>
        <Card.Text>
        This is my first Full Stack project, it's a movie library where you can save movies with description and release year. This project runs with the command "npm start".
        {/*Este es mi primer proyecto de Full Stack, se trata de una filmoteca donde se pueden guardar películas con descripción y año de lanzamiento. Este proyecto funciona mediante el comando "npm start". */}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"><a href='https://github.com/DCM91/BlockBuster'>visit my GH repository</a></small>
      </Card.Footer>
    </Card>
    </div>

    <div style={{  padding: '1rem', margin: '0 1rem', width: '100%', justifyContent: 'flex-end'}}>
    <Card className='workcard' >
    <Card.Img variant="top" src={require('../img/calculator.png')} />
      <Card.Body>
        <Card.Title>Claculator<span>JSX</span></Card.Title>
        <Card.Text>
        Web application that allows users to perform basic arithmetic operations.
        The project is built using React and runs with the command "npm start".
        {/*Aplicación web que permite a los usuarios realizar operaciones aritméticas básicas. El proyecto
         está construido usando React. Este proyecto funciona mediante el comando "npm start". */}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"><a href='https://github.com/DCM91/CalculatorJSX'>visit my GH repository</a></small>
      </Card.Footer>
    </Card>
    </div>

    </div>
    </WorksStyle>

  );
}

const WorksStyle= styled.div`

.workcard{
  
  background-color: #090a0f;
  width: 75%;
  padding: 1rem;
  color: #f2f2f2;

}
span{
  color: #ff760d;
}
h3{
  font-weight: bolder;
}
`