import { Segment, Header, Reveal, Grid, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Grid centered inverted columns="equal">
        <Grid.Row>
          <Grid.Column>
            <Link to="/about">
              <Reveal animated="fade">
                <Reveal.Content visible>
                  <div className="about-visible">
                    <h1>About</h1>
                  </div>
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Container className=" about-hidden" fluid />
                </Reveal.Content>
              </Reveal>
            </Link>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns="equal">
          <Grid.Column >
            <Link to="/projects">
                <Reveal animated="fade">
                    <Reveal.Content visible>
                        <div className="projects-visible">
                            <h1>Projects</h1>
                        </div>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <Container className="projects-hidden" fluid></Container>
                    </Reveal.Content>
                </Reveal>
            </Link>
          </Grid.Column>
          <Grid.Column >
          <Link to="/experience">
                <Reveal animated="fade">
                    <Reveal.Content visible>
                        <div className="projects-visible">
                            <h1>Experience</h1>
                        </div>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <Container className="experience-hidden" fluid></Container>
                    </Reveal.Content>
                </Reveal>
            </Link>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns="equal">
        <Link to="/hobbies">
              <Reveal animated="fade">
                <Reveal.Content visible>
                  <div className="hobbies-visible">
                    <h1>Hobbies</h1>
                  </div>
                </Reveal.Content>
              </Reveal>
            </Link>
          <Grid.Column mobile={8} computer={4}>
            <Container className=" woodworking" fluid></Container>
          </Grid.Column>
          <Grid.Column mobile={8} computer={4}>
            <Container className=" cycling" fluid></Container>
          </Grid.Column>
          <Grid.Column mobile={8} computer={4}>
            <Container className=" hiking" fluid></Container>
          </Grid.Column>
          <Grid.Column mobile={8} computer={4}>
            <Container className=" surfing" fluid></Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Home;
