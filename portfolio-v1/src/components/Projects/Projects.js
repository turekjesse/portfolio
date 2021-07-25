import MobileNav from '../Nav/MobileNav'
import DesktopNav from '../Nav/DesktopNav'

const Projects = ({useViewPortWidth, breakpoint}) => {

    const { width } = useViewPortWidth()

    return (
        <>
        {
            width < breakpoint ? <MobileNav /> : <DesktopNav />
         }
        <p>this is the projects component</p>
        </>
    )
}

export default Projects