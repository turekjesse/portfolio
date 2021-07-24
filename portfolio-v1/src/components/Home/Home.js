import { Segment, Header, Reveal, Grid, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Grid celled="internally" centered inverted columns="equal">
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
          <Grid.Column mobile={16} computer={8}>
            <Reveal>
                <Reveal.Content>
                    <Container className=" projects" fluid></Container>
                </Reveal.Content>
                <Reveal.Content>
                    <Container className=" projects" fluid></Container>
                </Reveal.Content>
            </Reveal>
          </Grid.Column>
          <Grid.Column mobile={16} computer={8}>
            <Container className=" experience" fluid></Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="equal">
          <Grid.Column>
            <Segment padded inverted textAlign="center">
              <Header>Hobbies</Header>
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns="equal">
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
