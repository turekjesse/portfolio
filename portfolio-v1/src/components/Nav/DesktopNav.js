import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const DesktopNav = () => {
    return (
        <Menu fluid widths={10} inverted>
          <Menu.Item
            name='home'
            as={Link}
            to="/"
          />
          <Menu.Item
          as={Link}
          to="/about"
            name='about'
          />
          <Menu.Item
          as={Link}
          to="/projects"
            name='projects'
          />
          <Menu.Item
          as={Link}
          to="/experience"
            name='experience'
          />
          <Menu.Item
          as={Link}
          to="/hobbies"
            name='hobbies'
          />
        </Menu>
    )
}

export default DesktopNav