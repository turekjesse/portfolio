import { useContext } from "react";
import { DarkModeContext } from "../../context/Context";

const Wrapper = (props) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <div className={darkMode ? "wrapper inverted" : "wrapper"}>{props.children}</div>
    </>
  );
};

export default Wrapper;
