import projectsBG from '../assets/image/projectsBG.jpg';

const projectStyles = {
  backgroundColor: "black",
  width: "100vw",
  paddingBottom: "200px",
  paddingTop: "100px",
  position: "relative", // Allow background image positioning
};

const backgroundImageStyles = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundImage: `url(${projectsBG})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.3,
  zIndex: 0,
};

const contentStyles = {
  position: "relative",
  zIndex: 1,
};

const Projects = () => {
  return (
    <div style={projectStyles} id="projects">
      {/* Background Image */}
      <div style={backgroundImageStyles}></div>

      {/* Content */}
      <div style={contentStyles}>
        <h1>
          <u> PROJECTS </u>
        </h1>

        <div style={{ display: "flex" }}>
          <div style={{ width: "25%", margin: "30px" }}>
            <b> Push Notification </b>
            <p> Push notification integration using RabbitMQ and Firebase (Android) / Apple APNs (iOS) with JavaScript </p>
            <a href="https://github.com/Redwan-Shawkat/push-notification" target="_blank" rel="noopener noreferrer"> Repository </a>
          </div>

          <div style={{ width: "25%", margin: "30px" }}>
            <b> SMS Distribution </b>
            <p> Built a secure SMS gateway microservice in Lumen with API authentication, third-party SMS provider integration, and delivery logging. </p>
            <a href="https://github.com/Redwan-Shawkat/Send-SMS" target="_blank" rel="noopener noreferrer"> Repository </a>
          </div>

          <div style={{ width: "25%", margin: "30px" }}>
            <b> Weather App </b>
            <p> A weather app is created using HTML, CSS, JavaScript Query, API </p>
            <div style={{ display: 'flex' }}>
              <a href="https://github.com/Redwan-Shawkat/Weather-APP" target="_blank" style={{ width: "33.33%" }}> Repository </a>
              <a href="https://redwan-shawkat.github.io/Weather-APP/" target="_blank" style={{ width: "33.33%" }}>Preview</a>
              <a href="https://www.youtube.com/watch?v=tb6AgtCxceQ"  target="_blank" style={{ width: "33.33%" }}>Video</a>
            </div>
          </div>

          <div style={{ width: "25%", margin: "30px" }}>
            <b>Portfolio Website</b>
            <p>A portfolio website is designed using HTML, CSS & React. </p>
            <div style={{ display: 'flex' }}>
              <a href="https://github.com/Redwan-Shawkat/portfolio_one" style={{ width: "33.33%" }}> Repository </a>
              <a href="https://portfolio-red-navy-six.vercel.app/" target="_blank" style={{ width: "33.33%" }}>Preview</a>
              <a href="https://youtu.be/eng0xxuCkYw" target="_blank" style={{ width: "33.33%" }}>Video</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
