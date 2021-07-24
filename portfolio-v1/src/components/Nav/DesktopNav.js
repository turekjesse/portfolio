import { Menu } from 'semantic-ui-react'

const DesktopNav = () => {
    return (
        <Menu fluid widths={12} inverted>
          <Menu.Item
            name='home'
            link
            to="/"
          />
          <Menu.Item
          link
          to="/about"
            name='about'
          />
          <Menu.Item
          link
          to="/projects"
            name='projects'
          />
          <Menu.Item
          link
          to="/experience"
            name='experience'
          />
          <Menu.Item
          link
          to="/hobbies"
            name='hobbies'
          />
        </Menu>
    )
}

export default DesktopNav