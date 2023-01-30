import React from 'react'
import styled from 'styled-components'

export const Skills = () => {
  return (
    <SkillsStyle>
    <div>
     <h3>Skills</h3>
    </div>
    <div>
        <section className='Sk'>
        <h5>Frontend</h5>
        </section>
        <section className='Sk'>
        <h5>Backend</h5>
        </section>
        <section className='Sk'>
        <h5>Tools</h5>
        </section>
        <section className='Sk'>
        <h5>TDD</h5>
        </section>
     </div>
     <div><p>See moore</p></div>
    
    </SkillsStyle>

  )
}
const SkillsStyle= styled.div`

    width: 90%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    flex-wrap:  wrap;
    justify-content: center;
    text-decoration: none;
    color: white;
    background: radial-gradient(ellipse at bottom,#1b2735 0,#090a0f 100%);
    z-index: 1;


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
    width: 45%;
    height: 10vh;
    border: solid .5rem #ffec78;
    margin: .5rem;
    padding: .5rem;
    display: flex;
    justify-content: center;
    :hover{
            color: red;
            scale: 1.05 ease-in duration-300;
            border: solid .5rem red;


        }

}
`