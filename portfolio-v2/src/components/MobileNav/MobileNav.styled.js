import styled from "styled-components"

export const MobileNavStyled = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #222222;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
    height: 100vh;
    text-align: left;
    padding:5rem 2rem;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    width: 12rem;
    row-gap: 0.625em;
    
    @media (min-width: 795px) {
    }

    a {
        font-size: 1.5rem;
        ${'' /* text-transform: uppercase; */}
        ${'' /* font-weight: bold; */}
        ${'' /* letter-spacing: 0.5rem; */}
        color: #d8d8d8;
        text-decoration: none;
        transition: color 0.1s linear;
        
        @media screen and (min-width: 795px) {
        font-size: 1.5rem;
        text-align: center;
        }

        &:hover {
        color: #979797;
        }
  }
`