import { Dropdown, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileNav = ({ handleInverted, isInverted }) => {
  const [isDisabled, setDisabled] = useState(false);

  return (
    <Menu icon inverted={isInverted}>
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
          setDisabled(!isDisabled);
          handleInverted();
        }}
      >
        <Icon name={isInverted ? "lightbulb outline" : "lightbulb"} />
      </Menu.Item>
    </Menu>
  );
};

export default MobileNav;
