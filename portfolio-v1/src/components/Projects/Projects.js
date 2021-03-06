import { Grid, Image, Segment, Button, Header } from "semantic-ui-react";

const Projects = ({ isInverted, projects }) => {
  return (
    <>
      <Segment className="no-margin" inverted={isInverted}>
        <Header
          className="no-margin"
          textAlign="center"
          inverted={isInverted}
          as="h1"
        >
          Projects
        </Header>
        {/* <Divider inverted={isInverted} className="proj-horiz-div" /> */}
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
                  inverted={isInverted}
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
                  inverted={isInverted}
                  className="no-margin"
                >
                  <Button.Group size="medium" inverted={isInverted}>
                    <Button
                      as="a"
                      href={project.url}
                      style={{ width: "60px" }}
                      color="grey"
                      inverted={isInverted}
                      icon="external"
                    />
                    <Button
                      as="a"
                      href={project.repo_url}
                      style={{ width: "60px" }}
                      color="grey"
                      inverted={isInverted}
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
