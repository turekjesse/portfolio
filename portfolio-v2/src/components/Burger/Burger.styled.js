import styled from 'styled-components'

export const StyledBurger = styled.button`
    position:absolute;
    right: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2.5rem;
    height: 2.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding:0;
    z-index:100;

    &:focus {
        outline: none;
    }

    

    div {
        width: 2rem;
        height: 0.25rem;
        background: ${({ open }) => open ? '#d8d8d8' : '#d8d8d8'};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
        z-index:100;
    }

@media screen and (min-width: 795px) {
    display:none;

div {
        display:none;
    }
    }
}

`