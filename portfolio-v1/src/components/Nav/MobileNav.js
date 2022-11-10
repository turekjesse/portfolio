import { Dropdown, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/Context";

const MobileNav = () => {  

  const {darkMode, handleDarkMode} = useContext(DarkModeContext)

  return (
    <Menu icon inverted={darkMode}>
      <Dropdown item icon="bars" simple>
        <Dropdown.Menu>
          <Menu.Item name="home" as={Link} to="/" />
          <Menu.Item as={Link} to="/about" name="about" />
          <Menu.Item as={Link} to="/projects" name="projects" />
          <Menu.Item as={Link} to="/experience" name="experience" />
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item
        onClick={() => {
          handleDarkMode();
        }}
      >
        <Icon name={darkMode ? "lightbulb outline" : "lightbulb"} />
      </Menu.Item>
    </Menu>
  );
};

export default MobileNav;
