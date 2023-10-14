import React from "react";

const App = () => {
  const portfolioData = {
    name: "Shubham soni",
    reg:"21BIT0616",
    place: "chittorgarh , RAJ | India",
    skills: ["Cloud Practitioner","Proficient in Java & C++", "Novice in Web Development(Mern)", "Intermediate in Database(mySQL & MongoDB)"],
    projects: [
      {
        title: "Farm2You | Agri-Tech Project",
        description: "Farm2Home website delivers farm-fresh, locally sourced produce directly to your doorstep, simplifying your access to quality agricultural products while supporting local farmers.",
      },
      {
        title: "MN-204 | Automated Car System",
        description: "Integrating Raspberry Pi with high-definition cameras, live streaming capabilities, and sensor modules empowers users to engage with and explore their environment in real-time.",
      },
      {
        title: "Shubham | Portfolio Website",
        description: "Explore my portfolio website, a dynamic showcase of my work powered by HTML, CSS, and JavaScript with the flexibility of Flexbox.",
      },
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>{portfolioData.name}</h1>
          <h2><u>Registration no:</u> {portfolioData.reg}</h2>
          <h2><u>Postal Location:</u> {portfolioData.place}</h2>
        </div>
        <div className="body">
          <div className="about">
            <h3><u>Description about me:</u></h3>
            <p>Hey! I am Shubham, 19 Years of age and currently pursuing my B.Tech Degree from VIT in IT. I have been since the beginning of my time here on earth, fascinated by these machines<br/>that we call computers, and from understanding what the internet is and how it works to now learning to make my own websites is a great journey so far but<br/>there is so much I still don't know which makes me excited...</p>
          </div>
          <div className="skills">
            <h3><u>Skills:</u></h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3><u>Some Personal Projects: </u></h3>
            {portfolioData.projects.map((project) => (
              <ul>
                <div className="project" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              </ul>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;