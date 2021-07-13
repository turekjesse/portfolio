import {FaInstagramSquare, FaLinkedin, FaGithubSquare} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div className="flex-row row-gap-10 border-t">
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
            </div>
        </footer>
    )
}

export default Footer