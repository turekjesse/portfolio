import MobileNav from '../Nav/MobileNav'
import DesktopNav from '../Nav/DesktopNav'

const Hobbies = ({useViewPortWidth, breakpoint}) => {

    const { width } = useViewPortWidth()

    return (
        <>
            {
                width < breakpoint ? <MobileNav /> : <DesktopNav />
            }
            <p>this is the hobbies component</p>
        </>
    )
}

export default Hobbies