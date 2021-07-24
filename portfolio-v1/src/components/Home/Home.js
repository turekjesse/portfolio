import { Segment,Image, Header, Reveal, Card, Grid, Container } from "semantic-ui-react";

const Home = () => {
  return (
    <>
      <Grid centered inverted columns='equal'>


        <Grid.Row padded>
          <Grid.Column>
            <Container className="grid-container about" fluid>
            </Container>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns="equal">
          <Grid.Column  mobile={16} computer={8}>
          <Container className="grid-container projects" fluid>
            </Container>
          </Grid.Column>
          <Grid.Column mobile={16} computer={8}>
          <Container className="grid-container experience" fluid>
            </Container>
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
          <Container className="grid-container woodworking" fluid>
            </Container>
          </Grid.Column>
          <Grid.Column mobile={8} computer={4}>
          <Container className="grid-container cycling" fluid>
            </Container>
          </Grid.Column>
          <Grid.Column mobile={8} computer={4}>
          <Container className="grid-container hiking" fluid>
            </Container>
          </Grid.Column>
          <Grid.Column mobile={8} computer={4}>
          <Container className="grid-container surfing" fluid>
            </Container>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </>
  );
};

export default Home;
