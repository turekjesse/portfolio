import {useState} from 'react'

import jtlogo from '../../icons/jtlogo.svg'
import {FaInstagramSquare, FaLinkedin, FaGithubSquare} from 'react-icons/fa'
import BurgerLayout from '../Burger/Burger.layout';
import MobileNav from '../MobileNav/MobileNav';




const Header = () => {
    
    const [open, setOpen] = useState(false)


    return (
        <header className="flex-row col-gap-10 border-b">
            <div className="flex-row col-gap-20 border-r icon-container">
                <img className="jt-logo" src={jtlogo} alt="" />
                {/* <div className="switch-outer">
                    <div className="switch-inner">
                    </div>
                </div> */}
            </div>
            <div className="flex-col row-gap-10 connect-container">
                <p>Connect</p>
                <div className="flex-row col-gap-10">
                    <a href="https://github.com/turekjesse">
                        <FaGithubSquare className="icons"/>
                    </a>
                    <a href="https://www.linkedin.com/in/turekjesse/">
                        <FaLinkedin className="icons"/>
                    </a>
                    <a href="https://www.instagram.com/towreckjesse/">
                        <FaInstagramSquare className="icons"/>
                    </a>
                </div>
            </div>
                <menu>
                </menu>
                <BurgerLayout open={open} setOpen={setOpen} />
                <MobileNav open={open} setOpen={setOpen}/>
        </header>
    )
}

export default Header