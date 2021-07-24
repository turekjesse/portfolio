import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const MobileNav = () => {
    return (
            <Menu inverted>
                <Dropdown item icon='bars' simple>
                <Dropdown.Menu inverted>
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
                    {/* <Dropdown.Item inverted>
                    <Icon name='dropdown' />
                    <span className='text'>New</span>
                    <Dropdown.Menu>
                        <Dropdown.Item>Document</Dropdown.Item>
                        <Dropdown.Item>Image</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>Open</Dropdown.Item>
                    <Dropdown.Item>Save...</Dropdown.Item>
                    <Dropdown.Item>Edit Permissions</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Export</Dropdown.Header>
                    <Dropdown.Item>Share</Dropdown.Item> */}
                </Dropdown.Menu>
                </Dropdown>
            </Menu>
        )

}

export default MobileNav
