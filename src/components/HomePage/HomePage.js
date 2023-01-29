import React from 'react'
import { MySelf } from './HPComponents/MySelf'
import styled from "styled-components"
import { HPInfo } from './HPComponents/HPInfo'

export const HomePage = () => {
  return (
    <HPStyle>
        <div>
            <MySelf />
            <HPInfo />
        </div>
    </HPStyle>
  )
}

const HPStyle = styled.div`
div{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-items: center;
    width: 100%;
}

    
    
`
