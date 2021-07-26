import MobileNav from "../Nav/MobileNav";
import DesktopNav from "../Nav/DesktopNav";
import { Grid, Image, Segment, Icon, Button, Header } from "semantic-ui-react";
import GA_Logo from "../../assets/GA_Logo.png";
import carhartt_wip_text_logo from "../../assets/carhartt_wip_text_logo.svg";
import Unis from "../../assets/Unis.png";
import Resume from "../../assets/Resume-Jesse_Turek.pdf";

const Experience = ({ useViewPortWidth, breakpoint }) => {
  const experience = [
    {
      company: "General Assembly",
      title: "Software Engineering Immersive",
      timeline: "Current",
      image: `${GA_Logo}`,
      description:
        "Engaged in a 12 week, 500+ hour, remote software engineering immersive course for full-stack web development.",
      skills: "HTML, CSS, JavaSript, MERN",
    },
    {
      company: "Carhartt WIP",
      title: "Content Manager",
      timeline: "3 / 2018 - 5 / 2021",
      image: `${carhartt_wip_text_logo}`,
      description:
        "Managed product data for 1000+ SKUs per season. Executed weekly site-wide content updates to align with sales-performance and marketing initiatives. Arranged and built biweekly newsletter campaigns utilizing Sketch and Mailchimp ESP. Coordinated feature deployments with external dev team.",
      skills: "Shopify, Mailchimp, Excel, Sketch, Photoshop, Amplience CMS",
    },
    {
      company: "Unis New York",
      title: "Ecommerce Manager",
      timeline: "6 / 2015 - 12 / 2017",
      image: `${Unis}`,
      description:
        "Owned all Ecommerce business operations including, but not limited to: order fulfillment, customer service, merchandising, SEO, and photo production",
      skills: "Shopify, Lightspeed, Mailchimp, Excel, Photoshop",
    },
  ];

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
      <Header className="no-margin" textAlign='center' inverted as="h2" dividing>
        Experience 
      </Header>
      <Segment className="no-margin btn-segment" textAlign="center" inverted>
        <Button
          as="a"
          href={Resume}
          target="_blank"
          basic
          color="grey"
          icon
          labelPosition="right"
        >
          View Resume
          <Icon name="download" />
        </Button>
      </Segment>
        <Grid centered columns="equal" relaxed="very">
          {experience.map((job, idx) => {
            if (idx < 2) {
              return (
                <Grid.Column
                  style={width < breakpoint ? mobileBorder : desktopBorder}
                  className="job-segment"
                  mobile={16}
                  computer={5}
                >
                  <Segment textAlign="center" inverted>
                    <Image size="small" centered fluid src={job.image} />
                    {/* <h1>{job.company}</h1> */}
                    <h3>{job.title}</h3>
                    <h5>{job.timeline}</h5>
                    <p>{job.description}</p>
                    <small>Skills: {job.skills}</small>
                  </Segment>
                </Grid.Column>
              );
            } else {
              return (
                <Grid.Column className="job-segment" mobile={16} computer={5}>
                  <Segment textAlign="center" inverted>
                    <Image size="small" centered fluid src={job.image} />
                    {/* <h1>{job.company}</h1> */}
                    <h3>{job.title}</h3>
                    <h5>{job.timeline}</h5>
                    <p>{job.description}</p>
                    <small>Skills: {job.skills}</small>
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

export default Experience;