import { Reveal, Grid, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home2 = ({ useViewPortWidth, breakpoint, isInverted }) => {
  const { width } = useViewPortWidth();

  const mobileBorder = {
    borderBottom: "1px solid rgba(255,255,255,.1)",
  };

  const desktopBorder = {
    borderRight: "1px solid rgba(255,255,255,.1)",
  };

  return (
    <>
      <Grid centered  columns={width > breakpoint ? "three" : "one"}>
        <Grid.Column>
          <Link to="/about">
            <Reveal animated="fade">
              <Reveal.Content visible>
                <div
                  className={isInverted ? "overlay inverted" : "overlay"}
                  style={width < breakpoint ? mobileBorder : desktopBorder}
                >
                  <h1>About</h1>
                </div>
              </Reveal.Content>
              <Reveal.Content hidden>
                <Container className=" about-hidden-2 hidden-image" fluid />
              </Reveal.Content>
            </Reveal>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="/projects">
            <Reveal animated="fade">
              <Reveal.Content visible>
                <div
                  className={isInverted ? "overlay inverted" : "overlay"}
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
        <Grid.Column>
          <Link to="/experience">
            <Reveal animated="fade">
              <Reveal.Content visible>
                <div
                  className={isInverted ? "overlay inverted" : "overlay"}
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
