import MobileNav from "../Nav/MobileNav";
import DesktopNav from "../Nav/DesktopNav";
import { Grid, Image, Segment } from "semantic-ui-react";

const About = ({ useViewPortWidth, breakpoint }) => {
  const { width } = useViewPortWidth();

  const mobileBorder = {
    borderBottom: "1px solid rgba(255,255,255,.2)",
  };

  const desktopBorder = {
    borderRight: "1px solid rgba(255,255,255,.2)",
  };

  return (
    <>
      {width < breakpoint ? <MobileNav /> : <DesktopNav />}
      <Segment className="no-margin" inverted>
        
        <Grid centered columns="equal">
          <Grid.Column
            style={width < breakpoint ? mobileBorder : desktopBorder}
            className="job-segment"
            mobile={16}
            computer={8}
          >
            <Segment textAlign="center" className="no-margin" inverted>
              <Image size="large" centered fluid src="https://i.imgur.com/9l1PKOx.jpg" />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment className="no-margin" inverted size="big">
                <h1>Hey, I'm Jesse</h1>
            </Segment>
            <Segment textAlign="center" size="large" inverted className="no-margin">
                <p>I am a Brooklyn-Based Software Engineer with 5 years of prior experience in eCommerce and a life-long passion for building, fixing, and tinkering with things. My knack for mechanics paired with my meticulous attention to detail and creative problem solving skills were the driving forces that lead me to learn to code.</p>
                <p>Check out the hobbies page for a glimpse into what I'm up to when I'm not building websites and apps.</p>
            </Segment>
            <Segment textAlign="center" className="no-margin" inverted>
              <Image size="large" centered fluid src="https://i.imgur.com/gSnQ9Jo.jpg" />
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    </>
  );
};

export default About;
