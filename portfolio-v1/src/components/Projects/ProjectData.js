import whack_a_moji from "../../assets/whack_a_moji.png";
import spacecadet from "../../assets/spacecadet.png";
import Artboard from "../../assets/Artboard.png";
import portfolio1 from "../../assets/portfolio1.png";
import devography from "../../assets/devography.png";
// import easternmanner from "../../assets/easternmanner.png";
// import portfolio2 from "../../assets/portfolio2.png";
// import portfolio3 from "../../assets/portfolio3.png";
// import portfolio4 from "../../assets/portfolio4.png";

export const ProjectData = [
  {
    url: "https://turekjesse.github.io/whack-a-moji-game/",
    repo_url: "https://github.com/turekjesse/whack-a-moji-game",
    title: "Whac-A-Moji",
    image: `${whack_a_moji}`,
    body: "Whac-A-Moji is a browser-based game  inspired by the 1975 arcade hit, 'Whac-A-Mole'.  Users have 30 seconds to click as many randomly appearing and randomly selected emojis, but becareful not to click the wrong boxes!",
    technologies: "HTML, CSS, JavaScript",
  },
  {
    url: "https://space-cadet.netlify.app/",
    repo_url: "https://github.com/turekjesse/project-2",
    title: "Devography",
    image: `${devography}`,
    body: "Devography is a working, interactive, full-stack application that receives data from a custom API that my team designed. The app allows users to learn more about programming languages, their icons, their authors, and their creation date.",
    technologies: "React, Mongoose, Express, Node, Bootstrap",
  },
  {
    url: "https://space-cadet.netlify.app/",
    repo_url: "https://github.com/turekjesse/project-2",
    title: "Space Cadet",
    image: `${spacecadet}`,
    body: "Space Cadet is a modern take on NASA's infamous Astronomy Photo of the Day website. This single page app recieves data from NASA's API, allowing users to view daily astronomy photos and a image galleries from various Mars exploration missions.",
    technologies: "React, Bootstrap, Masonry",
  },
  {
    url: "https://jesseturek.netlify.app/",
    repo_url: "https://github.com/turekjesse/portfolio/tree/main/portfolio-v1",
    title: "Portfolio",
    image: `${portfolio1}`,
    // image: [`${portfolio1}`, `${portfolio2}`, `${portfolio3}`, `${portfolio4}`],
    body: "My portfolio is a custom single page site showcasing my projects, professional experience, and personal interests. I chose to build a custom site to challenge myself using a new styling library and to implement features not found on generic site building platforms.",
    technologies: "React, CSS, Semantic UI",
  },
  {
    url: "",
    repo_url: "https://github.com/All-City-All-Stars",
    title: "All-City",
    image: `${Artboard}`,
    body: "All-City is full-stack native application that sends & receives data to a custom API that my team built. Essentially, All-City is a graffiti and street art focused social media platform that allows users to learn more about graffiti, the artists, and the location.",
    technologies: "React Native, Expo, Python, Django, PostgreSQL",
  },
  // {
  //   url: "",
  //   repo_url: "",
  //   title: "Eastern Manner",
  //   image: `${easternmanner}`,
  //   body: "Eastern Manner was launched in 2015 as a creative outlet to test my visual and woodworking skills, and ultimately bring something different to the skateboard industry.",
  //   technologies: "React",
  // },
];
