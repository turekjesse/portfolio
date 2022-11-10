import { useContext } from "react";
import { DarkModeContext } from "../../context/Context";
import { Grid, Image, Segment, Button, Header } from "semantic-ui-react";

const Projects = ({ projects }) => {

  const { darkMode } = useContext(DarkModeContext)

  return (
    <>
      <Segment className="no-margin" inverted={darkMode}>
        <Header
          className="no-margin"
          textAlign="center"
          inverted={darkMode}
          as="h1"
        >
          Projects
        </Header>
        {/* <Divider inverted={darkMode} className="proj-horiz-div" /> */}
        <Grid centered columns="equal" relaxed="very">
          {projects.map((project, key) => {
            return (
              <Grid.Column
                // style={width < breakpoint ? mobileBorder : desktopBorder}
                className="job-segment"
                mobile={16}
                computer={5}
                key={key}
              >
                <Segment
                  textAlign="center"
                  className="no-margin project-segment"
                  inverted={darkMode}
                >
                  <Image size="large" centered src={project.image} />
                  <h3>{project.title}</h3>
                  <p
                    style={{
                      textAlign: "left",
                      padding: "0 1.2rem",
                    }}
                  >
                    {project.body}
                  </p>
                  <small>Technologies: {project.technologies}</small>
                </Segment>
                <Segment
                  textAlign="center"
                  inverted={darkMode}
                  className="no-margin"
                >
                  <Button.Group size="medium" inverted={darkMode}>
                    <Button
                      as="a"
                      href={project.url}
                      style={{ width: "60px" }}
                      color="grey"
                      inverted={darkMode}
                      icon="external"
                    />
                    <Button
                      as="a"
                      href={project.repo_url}
                      style={{ width: "60px" }}
                      color="grey"
                      inverted={darkMode}
                      icon="github"
                    />
                  </Button.Group>
                </Segment>
              </Grid.Column>
            );
          })}
        </Grid>
      </Segment>
    </>
  );
};

export default Projects;
