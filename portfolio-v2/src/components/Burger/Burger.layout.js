import {StyledBurger} from './Burger.styled'

const BurgerLayout = ({open, setOpen}) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </StyledBurger>
    )
}

export default BurgerLayout