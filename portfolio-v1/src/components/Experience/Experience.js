import MobileNav from '../Nav/MobileNav'
import DesktopNav from '../Nav/DesktopNav'

const Experience = ({useViewPortWidth, breakpoint}) => {

    const { width } = useViewPortWidth()

    return (
        <>
        {
            width < breakpoint ? <MobileNav /> : <DesktopNav />
         }
        <p>this is the experience component</p>
        </>
    )
}

export default Experience