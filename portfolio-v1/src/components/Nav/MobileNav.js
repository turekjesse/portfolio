import { Dropdown, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <Menu inverted>
      <Dropdown item icon="bars" simple>
        <Dropdown.Menu inverted>
          <Menu.Item name="home" as={Link} to="/" />
          <Menu.Item as={Link} to="/about" name="about" />
          <Menu.Item as={Link} to="/projects" name="projects" />
          <Menu.Item as={Link} to="/experience" name="experience" />
          <Menu.Item as={Link} to="/hobbies" name="hobbies" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};

export default MobileNav;