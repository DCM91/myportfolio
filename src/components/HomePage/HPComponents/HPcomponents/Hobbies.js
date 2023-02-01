import React from 'react'
import styled from 'styled-components'

export const Hobbies = () => {
  return (
    <SkillsStyle>

    <div>
     <h3>Hobbies</h3>
    </div>
    <div>
        <section className='Sk'>
        <h5>NBA</h5>
        </section>
        <section className='Sk'>
        <h5>Gaming</h5>
        </section>
        <section className='Sk'>
        <h5>My Pets</h5>
        </section>
        <section className='Sk'>
        <h5>Training</h5>
        </section>
     </div>
    
    </SkillsStyle>

  )
}
const SkillsStyle= styled.div`

    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    flex-wrap:  wrap;
    justify-content: center;
    text-decoration: none;
    color: white;
    background: #090a0f;


h5{
    max-width: max-content;
    min-height: fit-content;
    max-height: max-content;
    color: #ffec78;
    text-align: center;
        :hover{
                color: red;
                scale: 1.05;

            }


}
.Sk{
    width: 20%;
    height: 20vh;
    border: solid .5rem #ffec78;
    margin: .5rem;
    padding: .5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    :hover{
            color: red;
            scale: 1.05 ease-in duration-300;
            border: solid .5rem red;


        }

}
`