import { Dropdown, Icon, Menu } from 'semantic-ui-react'

const MobileNav = () => {
    return (
            <Menu inverted>
                <Dropdown item icon='bars' simple>
                <Dropdown.Menu inverted>
                    <Dropdown.Item inverted>
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
                    <Dropdown.Item>Share</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </Menu>
        )

}

export default MobileNav
