import {Link} from 'react-router-dom'
import { MobileNavStyled } from "./MobileNav.styled"

const MobileNav = ({open}) => {
    return (
        <MobileNavStyled open={open}>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/experience'>Experience</Link>
            <Link to='/hobbies'>Hobbies</Link>
            <Link to='/contact'>Contact</Link>
        </MobileNavStyled>
    )
}

export default MobileNav