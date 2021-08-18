import { Grid, Image, Segment, Button, Header, } from "semantic-ui-react";
import {ProjectData} from './ProjectData'

const Projects = () => {

  return (
    <>
      <Segment className inverted>
          <Header className="no-margin" textAlign='center' inverted as="h1">Projects</Header>
          {/* <Divider inverted className="proj-horiz-div" /> */}
        <Grid centered columns="equal" relaxed="very">
          {ProjectData.reverse().map((project, idx) => {            
              return (
                <Grid.Column
                  // style={width < breakpoint ? mobileBorder : desktopBorder}
                  className="job-segment"
                  mobile={16}
                  computer={5}
                >
                  <Segment textAlign="center" className="no-margin project-segment" inverted>
                    <Image size="large" centered src={project.image} />
                    <h3>{project.title}</h3>
                    <p style={{textAlign: 'left', padding:'0 1.2rem'}}>{project.body}</p>
                    <small>Technologies: {project.technologies}</small>
                  </Segment>
                  <Segment textAlign="center" inverted className="no-margin">
                    <Button.Group size="medium" inverted>
                      <Button as="a" href={project.url} style={{width:"60px"}} color="grey"  inverted icon="external" />
                      <Button as="a" href={project.repo_url} style={{width:"60px"}} color="grey" inverted icon="github" />
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
