import {Link} from 'react-router-dom'

const Nav = () => {

    return (
        <nav className="row-gap-10 flex-col border-r side-nav">
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/experience'>Experience</Link>
            {/* <Link to='/experience2'>Experience2</Link> */}
            <Link to='/hobbies'>Hobbies</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    )

}

export default Nav