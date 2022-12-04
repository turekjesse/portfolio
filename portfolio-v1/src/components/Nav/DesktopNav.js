import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/Context";

const DesktopNav = () => {  
  const { darkMode, handleDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <Menu fluid widths={10} inverted={darkMode}>
        <Menu.Item id="one" as={Link} to="/" name="home" />
        <Menu.Item id="two" as={Link} to="/about" name="about" />
        <Menu.Item
          id="three"
          icon={darkMode ? "lightbulb outline" : "lightbulb"}          
          onClick={() => {            
            handleDarkMode();
          }}
        />
        <Menu.Item id="four" as={Link} to="/projects" name="projects" />
        <Menu.Item id="five" as={Link} to="/experience" name="experience" />
      </Menu>
    </>
  );
};

export default DesktopNav;
