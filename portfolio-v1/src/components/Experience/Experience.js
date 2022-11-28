import { Grid, Image, Segment, Icon, Button, Header } from "semantic-ui-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Resume2 from "../../assets/Jesse_Turek-Resume.pdf";
import { useContext } from "react";
import { DarkModeContext } from "../../context/Context";
// import Resume from "../../assets/Resume-Jesse_Turek.pdf";

const animation = { duration: 30000, easing: (t) => t };

const Experience = ({ useViewPortWidth, breakpoint, Jobs, Skills }) => {
  const { darkMode } = useContext(DarkModeContext);

  const { width } = useViewPortWidth();
  const slidesPerView = width < breakpoint ? 3 : 7;
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    renderMode: "performance",
    slides: {
      perView: slidesPerView,
      spacing: 15,
    },
    created(s) {
      s.moveToIdx(17, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 17, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 17, true, animation);
    },
  });

  return (
    <>
      <Segment inverted={darkMode}>
        <Header
          className="no-margin"
          textAlign="center"
          inverted={darkMode}
          as="h1"
        >
          Experience
        </Header>
        <Segment className="btn-segment" textAlign="center" inverted={darkMode}>
          <Button
            as="a"
            href={Resume2}
            target="_blank"
            // inverted={darkMode}
            color="grey"
            icon
            labelPosition="left"
            size="big"
          >
            View Resume
            <Icon name="file pdf outline" />
          </Button>
        </Segment>
        {/* <Divider inverted={darkMode} className="exper-horiz-div" /> */}
        <Grid centered columns="equal" relaxed="very">
          {Jobs.map((job, key) => {
            return (
              <Grid.Column
                // style={width < breakpoint ? mobileBorder : desktopBorder}
                className="job-segment"
                mobile={16}
                tablet={8}
                computer={5}
                widescreen={4}
                key={key}
              >
                <Segment textAlign="center" inverted={darkMode}>
                  <Image
                    width="200px"
                    centered
                    src={!darkMode ? job.image_2 : job.image}
                  />
                  {/* <h1>{job.company}</h1> */}
                  <h3>{job.title}</h3>
                  <h5>{job.timeline}</h5>
                  <p style={{ textAlign: "left" }}>{job.description}</p>
                  <small>Skills: {job.skills}</small>
                </Segment>
              </Grid.Column>
            );
          })}
        </Grid>
      </Segment>
      <Segment inverted={darkMode}>
        <Header
          className="no-margin"
          textAlign="center"
          inverted={darkMode}
          as="h1"
        >
          Skills
        </Header>
      </Segment>
      <Segment inverted={darkMode}>
        <div ref={sliderRef} className="keen-slider">
          {Skills.map((skill, key) => {
            return (
              <div
                style={{ textAlign: "center" }}
                className="keen-slider__slide"
                key={key}
              >
                <img height="80px" alt={skill.title} src={skill.logo} />
                <p style={{ padding: "20px" }}>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </Segment>
    </>
  );
};

export default Experience;
