import GA_Logo from "../../icons/GA_Logo.png"
import carhartt_wip_text_logo from "../../icons/carhartt_wip_text_logo.png"
import Unis from "../../icons/Unis.png"
import { StyledExperienceBody, StyledExperienceHeader, StyledCardContainer } from "./Experience.styled"

const Experience2 = () => {

    const experience = [

        {
            company:'General Assembly',
            title: 'Software Engineering Immersive',
            timeline: 'Current',
            image: `${GA_Logo}`,
            description: 'Engaged in a 12 week, 500+ hour, remote software engineering immersive course for full-stack web development.',
            skills: 'HTML, CSS, JavaSript, MERN'
        },
        {
            company:'Carhartt WIP',
            title: 'Content Manager',
            timeline: '3/2018 - 5/2021',
            image: `${carhartt_wip_text_logo}`,
            description: 'Managed product data for 1000+ SKUs per season. Executed weekly site-wide content updates to align with sales-performance and marketing initiatives. Arranged and built biweekly newsletter campaigns utilizing Sketch and Mailchimp ESP. Coordinated feature deployments with external dev team.',
            skills: 'Shopify, Mailchimp, Excel, Sketch, Photoshop, Amplience CMS'
        },
        {
            company:'Unis New York',
            title: 'Ecommerce Manager',
            timeline: '6/2015 - 12/2017',
            image: `${Unis}`,
            description: 'Owned all Ecommerce business operations including, but not limited to: order fulfillment, customer service, merchandising, SEO, and photo production',
            skills: 'Shopify, Lightspeed, Mailchimp, Excel, Photoshop'
        },

    ]


    return (
        <main className="projects">
            {
                experience.map((experience, i) => {
                    return (                        
                        <StyledCardContainer>
                        <StyledExperienceHeader>
                                <h2>{experience.company}</h2>
                        </StyledExperienceHeader>
                            <StyledExperienceBody>
                                <img src={experience.image} alt="" />
                                <small>{experience.timeline}</small>
                                <h3>{experience.title}</h3>
                                <p>{experience.description}</p>
                                <div>
                                    <h4>Skills:</h4>
                                    <small>{experience.skills}</small>
                                </div>
                            </StyledExperienceBody>                      
                        </StyledCardContainer>
                    )
                })
            }
        </main>
    )
}

export default Experience2