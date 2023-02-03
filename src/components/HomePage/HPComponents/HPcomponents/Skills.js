import React from 'react'
import { MdBuild, MdOutlineStorage, MdScience, MdStarRate, MdWeb } from 'react-icons/md';
import { DiBootstrap, DiCss3, DiGitBranch, DiHtml5, DiJavascript1, DiNodejs, DiReact, DiScrum } from "react-icons/di";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';
import { SiCypress, SiExpress, SiInsomnia, SiJest, SiJsonwebtokens, SiMongodb } from 'react-icons/si';


export const Skills = () => {
  return (
    <TimeLineStyle>
    <div>
      <div className='titlesk'>
      <h2>Skills</h2>
      </div>


      <div>
        <VerticalTimeline
        layout={'1-columns'}
        className='all'
        >

        <VerticalTimelineElement
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MdWeb />}
        >

            <h3>Frontend Developer</h3>

            <h3 className='icons'>
              <DiReact/>
              <DiJavascript1/>
              <DiCss3/>
              <DiHtml5/>
            </h3>

      </VerticalTimelineElement>



      <VerticalTimelineElement
        
        contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<MdOutlineStorage />}
      >
        <h3>Backend Developer</h3>
        <h3 className='icons'>
          <DiNodejs/>
          <SiExpress/>
          <SiMongodb/>
          <SiJsonwebtokens/>
        </h3>
      </VerticalTimelineElement>



      <VerticalTimelineElement
        contentStyle={{ background: '#808080', color: '#fff' }}
        iconStyle={{ background: '#808080', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #808080' }}
        icon={<MdBuild />}
      >
        <h3 className="vertical-timeline-element-title">Frameworks & Tools</h3>
        <h3 className='icons'>
          <DiGitBranch/>
          <DiBootstrap/>
          <SiInsomnia/>
          <DiScrum />
        </h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: '#00a05d', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #00a05d' }}
        iconStyle={{ background: '#00a05d', color: '#fff' }}
        icon={<MdScience />}
      >
        <h3>Test Driven Development</h3>
        <h3 className='icons'>
          <SiCypress/>
          <SiJest/>
        </h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<MdStarRate />}
        />
      </VerticalTimeline>
      </div>
    </div>
    </TimeLineStyle>    
  )
}

const TimeLineStyle = styled.div`
    display: flex;
    width: 90%;
    min-height: 80vh;
    max-height: max-content;
    overflow: hidden;
    margin-right: 2rem;
    font-weight: bolder;
    padding-bottom: 2rem;
    font-family: "Poppins", sans-serif;
    

.all{
  justify-content: center;
  text-align: center;
}
.vertical-timeline-element-content.bounce-in{
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  padding: .5rem 2rem;
  text-align: center;
  margin-right: 1rem;


}
.titlesk{
  color: #ffec78;
  display: flex;
  width: 100%;
  text-align: start;
  justify-content: flex-start;
  padding: 1rem;
  font-family: "Righteous", cursive;
  font-size: xx-large;
}

h3{
  text-align: center;
  padding-right: 2rem;
  padding-left: 2rem;

}
.icons{
  color: #ffec78;
  font-size: xx-large;
  font-weight: bold;
}
`
