import { Dropdown, Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileNav = ({ handleInverted, isInverted }) => {
  const [isDisabled, setDisabled] = useState(false);

  return (
    <Menu inverted={isInverted}>
      <Dropdown item icon="bars" simple>
        <Dropdown.Menu>
          <Menu.Item name="home" as={Link} to="/" />
          <Menu.Item as={Link} to="/about" name="about" />
          <Menu.Item as={Link} to="/projects" name="projects" />
          <Menu.Item as={Link} to="/experience" name="experience" />
        </Dropdown.Menu>
      </Dropdown>
      <Button
        color={isInverted ? "black" : "white"}
        icon={isInverted ? "lightbulb outline" : "lightbulb"}
        onClick={() => {
          setDisabled(!isDisabled);
          handleInverted();
        }}
      />
    </Menu>
  );
};

export default MobileNav;
