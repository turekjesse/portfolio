import MobileNav from "../Nav/MobileNav";
import DesktopNav from "../Nav/DesktopNav";
import { Grid, Image, Segment, Button, Header } from "semantic-ui-react";
import whack_a_moji from "../../assets/whack_a_moji.png";
import spacecadet from "../../assets/spacecadet.png";
import easternmanner from "../../assets/easternmanner.png";

const Projects = ({ useViewPortWidth, breakpoint }) => {
  const { width } = useViewPortWidth();

  const projects = [
    {
      url: "https://turekjesse.github.io/whack-a-moji-game/",
      repo_url: "https://github.com/turekjesse/whack-a-moji-game",
      title: "Whack-A-Moji",
      image: `${whack_a_moji}`,
      body: "Whack-A-Moji is a browser-based 'whack-o-mole' game where the user has 30 seconds to click as many randomly appearing and randomly selected emojis",
      technologies: "HTML, CSS, JavaScript",
    },
    {
      url: "https://space-cadet.netlify.app/",
      repo_url: "https://github.com/turekjesse/project-2",
      title: "Space Cadet",
      image: `${spacecadet}`,
      body: "Space Cadet is a modern take on NASA's infamous Astronomy Photo of the Day website, joined with a gallery of images from various Mars exploration missions.",
      technologies: "React, Bootstrap, Masonry",
    },
    {
      url: "",
      repo_url: "",
      title: "Eastern Manner",
      image: `${easternmanner}`,
      body: "Eastern Manner was launched in 2015 as a creative outlet to test my visual and woodworking skills, and ultimately bring something different to the skateboard industry.",
      technologies: "React",
    },
  ];

  const mobileBorder = {
    borderBottom: "1px solid rgba(255,255,255,.09)",
  };

  const desktopBorder = {
    borderRight: "1px solid rgba(255,255,255,.09)",
  };

  return (
    <>
      {width < breakpoint ? <MobileNav /> : <DesktopNav />}
      <Segment className="no-margin" inverted>
          <Header className="no-margin" textAlign='center' inverted as="h2" dividing>Projects</Header>
        <Grid centered columns="equal" relaxed="very">
      
      
          {projects.map((project, idx) => {
            if (idx < 2) {
              return (
                <Grid.Column
                  style={width < breakpoint ? mobileBorder : desktopBorder}
                  className="job-segment"
                  mobile={16}
                  computer={5}
                >
                  <Segment textAlign="center" className="no-margin project-segment" inverted>
                    <Image size="large" centered fluid src={project.image} />
                    <h3>{project.title}</h3>
                    <p>{project.body}</p>
                    <small>Technologies: {project.technologies}</small>
                  </Segment>
                  <Segment textAlign="center" inverted className="no-margin">
                    <Button.Group size="medium">
                      <Button as="a" href={project.url} style={{width:"60px"}} color="grey"  inverted icon="external" />
                      <Button as="a" href={project.repo_url} style={{width:"60px"}} color="grey" inverted icon="github" />
                    </Button.Group>
                  </Segment>
                </Grid.Column>
              );
            } else {
              return (
                <Grid.Column className="job-segment" mobile={16} computer={5}>
                  <Segment textAlign="center" className="no-margin project-segment" inverted>
                    <Image size="large" centered fluid src={project.image} />
                    <h3>{project.title}</h3>
                    <p>{project.body}</p>
                    <small>Technologies: {project.technologies}</small>
                  </Segment>
                  <Segment textAlign="center" inverted className="no-margin">
                    <Button.Group size="medium">
                      <Button style={{width:"60px"}} color="grey"  inverted icon="external" />
                      <Button style={{width:"60px"}} color="grey" inverted icon="github" />
                    </Button.Group>
                  </Segment>
                </Grid.Column>
              );
            }
          })}
        </Grid>
      </Segment>
    </>
  );
};

export default Projects;
