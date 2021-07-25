import MobileNav from '../Nav/MobileNav'
import DesktopNav from '../Nav/DesktopNav'

const About = ({useViewPortWidth, breakpoint}) => {

    const { width } = useViewPortWidth()

    return (
        <>
        {
            width < breakpoint ? <MobileNav /> : <DesktopNav />
         }
        <p>this is the about component</p>
        </>
    )
}

export default About