import whack_a_moji from "../../icons/whack_a_moji.png"
import spacecadet from "../../icons/spacecadet.png"
import easternmanner from "../../icons/easternmanner.png"
import { FaExternalLinkSquareAlt, FaGithubSquare} from 'react-icons/fa'

const Projects = () => {

    const projects = [

        {
            url:'https://turekjesse.github.io/whack-a-moji-game/',
            repo_url: 'https://github.com/turekjesse/whack-a-moji-game',
            title: "Whack-A-Moji",
            image: `${whack_a_moji}`,
            body: "Whack-A-Moji is a browser-based 'whack-o-mole' game where the user has 30 seconds to click as many randomly appearing and randomly selected emojis",
            technologies: "HTML, CSS, JavaScript"
        },
        {
            url:'https://space-cadet.netlify.app/',
            repo_url: 'https://github.com/turekjesse/project-2',
            title: "Space Cadet",
            image: `${spacecadet}`,
            body: "Space Cadet is a modern take on NASA's infamous Astronomy Photo of the Day website, joined with a gallery of images from various Mars exploration missions.",
            technologies: "React, Bootstrap, Masonry"
        },
        {
            url:'',
            repo_url: '',
            title: "Eastern Manner",
            image: `${easternmanner}`,
            body: "Eastern Manner was launched in 2015 as a creative outlet to test my visual and woodworking skills, and ultimately bring something different to the skateboard industry. Now, I'm re-creating the website from the ground-up.",
            technologies: "React"
        },

    ]


    return (
        <main className="projects">
            {
                projects.map((project, i) => {
                    return (                        
                        <div className="flex-col card-container row-gap-5">
                            <div className="card-header flex-row">
                                <h2>{project.title}</h2>
                            </div>
                            <div className="card-body flex-col">
                                <img src={project.image} alt="" />
                                <p>{project.body}</p>
                                <div>
                                    <h4>Technologies:</h4>
                                    <small>{project.technologies}</small>
                                </div>
                                <div className="flex-row col-gap-10 card-icons">
                                    <a href={project.url}>
                                        <FaExternalLinkSquareAlt className="card-icons icons"/>
                                    </a>
                                    <a href={project.repo_url}>
                                        <FaGithubSquare className="card-icons icons"/>
                                    </a>
                                </div>
                            </div>
                        </div>                                            
                    )
                })
            }
        </main>
    )
}

export default Projects