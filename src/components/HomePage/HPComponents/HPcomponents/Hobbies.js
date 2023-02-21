import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'

export const Hobbies = () => {
  return (
    <SkillsStyle>

    <div>
     <h3>Hobbies</h3>
    </div>
    <div>
      
        <section className='Sk'>
          <Card className="bg-dark text-white">
            <Card.Img className='fotos' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZwW2CvpKH7uFqbfUglHhHtarKxf4RRlq-brCouZpyFKRk3tBxOUawYjqSspEiJHmtIgE&usqp=CAU' alt="NBA" />

            <Card.Title className='titles'><h5>NBA</h5></Card.Title>
          </Card> 
        </section>
              
        <section className='Sk'>
          <Card className="bg-dark text-white">
            <Card.Img 
              className='fotos'
              src='https://store-images.s-microsoft.com/image/apps.54313.65765405318615559.1860d263-d982-466f-947a-523231ff1c3f.f28d0585-8032-4d71-9c36-6988cc6e698d?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF'
              alt="Gaming" />
            <Card.Title className='titles'><h5>Gaming</h5></Card.Title>
          </Card> 
        </section>



        <section className='Sk'>
          <Card className="bg-dark text-white">
            <Card.Img className='fotos' src='https://www.gatoexotico.com/wp-content/uploads/2020/04/gato-blanco-negro-cachorro.jpg' alt="My cats" />

            <Card.Title className='titles'><h5>My Pets</h5></Card.Title>
          </Card> 
        </section>

        <section className='Sk'>
          <Card className="bg-dark text-white">
            <Card.Img 
              className='fotos'
              src='https://st.depositphotos.com/1017227/3879/i/450/depositphotos_38790633-stock-photo-dumbells-on-wooden-floor.jpg'
              alt="Training" />
            <Card.Title className='titles'><h5>Training</h5></Card.Title>
          </Card> 
        </section>

     </div>
    
    </SkillsStyle>

  )
}
const SkillsStyle= styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-weight: bold;
    min-height: 100%;
    max-height: fit-content;
    justify-content: center;
    text-decoration: none;
    color: white;
    background: #090a0f;
    padding-bottom: 1rem;

    
h3{
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-family: "Righteous",cursive;
  color: #f2f2f2;
}

h5{
    max-width: max-content;
    color: #ffec78;
    text-align: center;


}
.Sk{
    border: #ffec78 solid .2rem;
    width: 16rem;
    min-height: 15REM;
    max-height: fit-content;
    margin: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    padding: 0.1rem;
    :hover{
      border: #bf1e2d solid .4rem;

    }

}
.fotos{
  width: 100%;
  height: 78%;
}
.bg-dark{
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
}
.titles{
  padding-top: .3rem;
}
`