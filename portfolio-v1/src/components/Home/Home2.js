import { useContext, useEffect } from "react";
import { DarkModeContext } from "../../context/Context";
import { Reveal, Grid, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "./Home.css";

const Home2 = ({ useViewPortWidth, breakpoint }) => {
  const { darkMode } = useContext(DarkModeContext);
  const { width } = useViewPortWidth();

  const mobileBorder = {
    borderBottom: "1px solid rgba(255,255,255,.1)",
  };

  const desktopBorder = {
    borderRight: "1px solid rgba(255,255,255,.1)",
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      // get innerHeight, convert to VH%
      const vh = window.innerHeight * 0.01;
      // set VH css var
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);

  // HOME SCREEN ENTER ANIMATION
  useEffect(() => {
    const tl = gsap.timeline();
    // anmimate mobile menu
    if (document.getElementById("menu")) {
      tl.from("#menu", { duration: 0.8, delay: 0.4, yPercent: -100 });
    }
    // animate first home component column & desktopnav menu item
    tl.from(
      "#one",
      {
        duration: 1,
        opacity: 0,
        ease: "power4.out",
        yPercent: -100,
      },
      "<"
    );
    // animate second home component column & desktopnav menu item
    tl.from(
      "#two",
      {
        duration: 1,
        opacity: 0,
        ease: "power4.out",
        yPercent: -200,
      },
      "<"
    );
    // animate third home component column & desktopnav menu item
    tl.from(
      "#three",
      {
        duration: 1,
        opacity: 0,
        ease: "power4.out",
        yPercent: -300,
      },
      "<"
    );
    // animate fourth desktopnav menu item
    if (document.getElementById("four")) {
      tl.from(
        "#four",
        {
          duration: 1,
          opacity: 0,
          ease: "power4.out",
          yPercent: -400,
        },
        "<"
      );
    }
    // animate fifth desktopnav menu item
    if (document.getElementById("five")) {
      tl.from(
        "#five",
        {
          duration: 1,
          opacity: 0,
          ease: "power4.out",
          yPercent: -500,
        },
        "<"
      );
    }
    //
    if (width < breakpoint) {
      tl.from(".hidden-image", { duration: 1, opacity: 0 }, "<0.3");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Grid centered columns={width > breakpoint ? "three" : "one"}>
        <Grid.Column id="one">
          <Link to="/about">
            <Reveal animated="fade">
              <Reveal.Content visible>
                <div
                  className={darkMode ? "overlay inverted" : "overlay"}
                  style={width < breakpoint ? mobileBorder : desktopBorder}
                >
                  <h1>About</h1>
                </div>
              </Reveal.Content>
              <Reveal.Content hidden>
                <Container className="about-hidden-2 hidden-image" fluid />
              </Reveal.Content>
            </Reveal>
          </Link>
        </Grid.Column>
        <Grid.Column id="two">
          <Link to="/projects">
            <Reveal animated="fade">
              <Reveal.Content visible>
                <div
                  className={darkMode ? "overlay inverted" : "overlay"}
                  style={width < breakpoint ? mobileBorder : desktopBorder}
                >
                  <h1>Projects</h1>
                </div>
              </Reveal.Content>
              <Reveal.Content hidden>
                <Container
                  className="projects-hidden-2 hidden-image"
                  fluid
                ></Container>
              </Reveal.Content>
            </Reveal>
          </Link>
        </Grid.Column>
        <Grid.Column id="three">
          <Link to="/experience">
            <Reveal animated="fade">
              <Reveal.Content visible>
                <div
                  className={darkMode ? "overlay inverted" : "overlay"}
                  style={width < breakpoint ? mobileBorder : desktopBorder}
                >
                  <h1>Experience</h1>
                </div>
              </Reveal.Content>
              <Reveal.Content hidden>
                <Container
                  className="experience-hidden-2 hidden-image"
                  fluid
                ></Container>
              </Reveal.Content>
            </Reveal>
          </Link>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Home2;
