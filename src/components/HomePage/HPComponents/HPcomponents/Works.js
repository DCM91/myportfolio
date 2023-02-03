import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

export const Works=()=> {
  return (
    <WorksStyle>
    <div>


    <div style={{ color: 'black', padding: '1rem', margin: '0 1rem', width: '100%', justifyContent: 'flex-start'}}>
    <Card className='workcard' style={{ color: 'black' }}>
      <Card.Img variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--ExKo3cO4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/59ta1m2cp7h8vng9aow2.png" />
      <Card.Body >
        <Card.Title>Slack Clone</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
     </div>


     <div style={{ color: 'black', padding: '1rem', margin: '0 1rem', width: '100%', justifyContent: 'flex-end'}}>
    <Card className='workcard' style={{ color: 'black' }}>
    <Card.Img variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--ExKo3cO4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/59ta1m2cp7h8vng9aow2.png" />
      <Card.Body>
        <Card.Title>Pokedex</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to
          additional content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 1 month ago</small>
      </Card.Footer>
    </Card>
    </div>


    <div style={{ color: 'black', padding: '1rem', margin: '0 1rem', width: '100%', justifyContent: 'flex-start'}}>
    <Card className='workcard' style={{ color: 'black' }}>
    <Card.Img variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--ExKo3cO4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/59ta1m2cp7h8vng9aow2.png" />
      <Card.Body>
        <Card.Title>Blockbuster</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 2 months ago</small>
      </Card.Footer>
    </Card>
    </div>

    <div style={{ color: 'black', padding: '1rem', margin: '0 1rem', width: '100%', justifyContent: 'flex-end'}}>
    <Card className='workcard' style={{ color: 'black' }}>
    <Card.Img variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--ExKo3cO4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/59ta1m2cp7h8vng9aow2.png" />
      <Card.Body>
        <Card.Title>ClaculatorJSX</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to
          additional content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 1 month ago</small>
      </Card.Footer>
    </Card>
    </div>

    </div>
    </WorksStyle>

  );
}

const WorksStyle= styled.div`

.workcard{
  
  background-color: brown;
  width: 75%;
  padding: 1rem;

}

`