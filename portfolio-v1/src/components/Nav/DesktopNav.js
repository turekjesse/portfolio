import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const DesktopNav = ({ isInverted, handleInverted }) => {
  const [isDisabled, setDisabled] = useState(false);

  return (
    <>
      <Menu fluid widths={10} inverted={isInverted}>
        <Menu.Item as={Link} to="/" name="home" />
        <Menu.Item as={Link} to="/about" name="about" />
        <Menu.Item
          icon={isInverted ? "lightbulb outline" : "lightbulb"}
          onClick={() => {
            setDisabled(!isDisabled);
            handleInverted();
          }}
        />
        <Menu.Item as={Link} to="/projects" name="projects" />
        <Menu.Item as={Link} to="/experience" name="experience" />
      </Menu>
    </>
  );
};

export default DesktopNav;
