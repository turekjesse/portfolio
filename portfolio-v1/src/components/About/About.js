import { Grid, Segment, Image } from "semantic-ui-react";
import "./About.css";
import Surf from "../../assets/surf.mp4";

const About = ({ useViewPortWidth, breakpoint, isInverted }) => {
  const { width } = useViewPortWidth();

  // const mobileBorder = {
  //   borderBottom: "1px solid rgba(255,255,255,.2)",
  // };

  // const desktopBorder = {
  //   borderRight: "1px solid rgba(255,255,255,.2)",
  // };

  return (
    <>
      <Segment className="no-margin" inverted={isInverted}>
        <Grid centered columns="equal">
          <Grid.Column
            // style={width < breakpoint ? mobileBorder : desktopBorder}
            className="about-segment"
            mobile={16}
            computer={8}
          >
            <Segment textAlign="center" className="no-margin" inverted={isInverted}>
              <Image
                size="big"
                centered
                fluid
                src="https://i.imgur.com/9l1PKOx.jpg"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <div className="about-container">
              <Segment className="no-margin  about-header" inverted={isInverted}>
                <h1>Hey, I'm Jesse</h1>
              </Segment>
              <Segment size="large"  className="no-margin" inverted={isInverted}>
                <p>
                  I am a Brooklyn-Based Software Engineer with 5 years of prior
                  experience in eCommerce and a life-long passion for building,
                  fixing, and tinkering with things. My knack for mechanics
                  paired with my meticulous attention to detail and creative
                  problem solving skills were the driving forces that lead me to
                  learn to code.
                </p>
              </Segment>
              <Segment textAlign="center" className="no-margin" inverted={isInverted}>
                <Image
                  size="big"
                  centered
                  fluid
                  src="https://i.imgur.com/gSnQ9Jo.jpg"
                />
              </Segment>
            </div>
          </Grid.Column>
          <Grid.Column
            // style={width < breakpoint ? mobileBorder : desktopBorder}
            className="about-segment"
            mobile={16}
            computer={8}
          >
            <div className="about-container">
              <Segment size="large" inverted={isInverted} className="no-margin">
                <p>
                  When I'm not cracking code, you can find me outdoors surfing,
                  bikepacking, hiking, or skateboarding or in a workshop tuning
                  up bikes, turning wooden bowls, or making custom furniture.
                </p>
                <p>
                  It's rare that I'm ever inactive, but when I am, I'm relaxing
                  on the couch or in the park with my dog, Asha.
                </p>
                <p>
                  Check out the photos below for a glimpse into some of my
                  adventures and creations.
                </p>
              </Segment>
              <Segment textAlign="center" className="no-margin" inverted={isInverted}>
                <Image
                  size="big"
                  centered
                  fluid
                  src="https://i.imgur.com/ueQJKbe.jpg"
                />
              </Segment>
            </div>
          </Grid.Column>
          <Grid.Column>
            <Segment textAlign="center" className="no-margin" inverted={isInverted}>
              <Image
                size="large"
                centered
                fluid
                src="https://i.imgur.com/NgQQ7dM.jpg"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column
            // style={width < breakpoint ? mobileBorder : desktopBorder}
            className="about-segment"
            mobile={16}
            computer={8}
          >
            <Segment textAlign="center" className="no-margin" inverted={isInverted}>
              <Image
                size="large"
                centered
                fluid
                src="https://i.imgur.com/E8Lp72A.jpg"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <div
              style={width > breakpoint ? { marginTop: "3rem" } : null}
              className="about-container"
            >
              <Segment textAlign="center" className="no-margin" inverted={isInverted}>
                <Image
                  size="large"
                  centered
                  fluid
                  src="https://i.imgur.com/UbfkMpE.jpg"
                />
              </Segment>
              <Segment textAlign="center" className="no-margin" inverted={isInverted}>
                <Image
                  size="large"
                  centered
                  fluid
                  src="https://i.imgur.com/9CRF8ns.jpg"
                />
              </Segment>
            </div>
          </Grid.Column>
          <Grid.Row>
            <Segment inverted={isInverted}>
              <video width="100%" src={Surf} controls loop="true">
                Sorry, your browser doesn't support video.
              </video>
            </Segment>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default About;
