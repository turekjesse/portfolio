import styled from 'styled-components'

export const StyledCardContainer = styled.div `
    
    display: flex;
    flex-direction: column;

`

export const StyledExperienceHeader = styled.header `
  
    display:flex;
    flex-direction:row;
    padding:1.25rem 1rem;
    background-color:#d8d8d8;
    color:#222222;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    justify-content: center;
    margin: 0;

`

export const StyledExperienceBody = styled.div `

    background-color:#d8d8d8;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding:1.25rem 1rem;
    justify-content:space-between;
    align-items: center;
    min-height: 60vh;
    text-align: center;

    p {
        font-size: 1.3rem;
        text-align: left;
    }

    img {
        width:70%; 
    }

`