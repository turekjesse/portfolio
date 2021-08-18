import { Grid, Image, Segment, Icon, Button, Header, } from "semantic-ui-react";
import { ExperienceData } from "./ExperienceData";
import Resume2 from "../../assets/Jesse_Turek-Resume.pdf";
// import Resume from "../../assets/Resume-Jesse_Turek.pdf";

const Experience = () => {

  return (
    <>
      <Segment inverted>
        <Header className="no-margin" textAlign="center" inverted as="h1">
          Experience
        </Header>
        <Segment className="btn-segment" textAlign="center" inverted>
          <Button
            as="a"
            href={Resume2}
            target="_blank"
            // inverted
            color="grey"
            icon
            labelPosition="left"
            size="big"
          >
            View Resume
            <Icon name="file pdf outline" size='' />
          </Button>
        </Segment>
        {/* <Divider inverted className="exper-horiz-div" /> */}
        <Grid centered columns="equal" relaxed="very">
          {ExperienceData.map((job, idx) => {          
              return (
                <Grid.Column
                  // style={width < breakpoint ? mobileBorder : desktopBorder}
                  className="job-segment"
                  mobile={16}
                  computer={5}
                >
                  <Segment textAlign="center" inverted>
                    <Image width='200px' centered src={job.image} />
                    {/* <h1>{job.company}</h1> */}
                    <h3>{job.title}</h3>
                    <h5>{job.timeline}</h5>
                    <p style={{textAlign: 'left'}}>{job.description}</p>
                    <small>Skills: {job.skills}</small>
                  </Segment>
                </Grid.Column>
              );            
          })}          
        </Grid>
      </Segment>
    </>
  );
};

export default Experience;
