import ExperienceBG from '../assets/image/ExperienceBG.jpg';

const experienceStyles = {
  margin: "0 auto",
  width: "100vw",
  paddingBottom: "100px",
  paddingTop: "100px",
  position: "relative",
};

const backgroundImageStyles = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundImage: `url(${ExperienceBG})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.3,
  zIndex: 0,
};

const contentStyles = {
  position: "relative",
  zIndex: 1,
};

const Experience = () => {
  return (
    <div style={experienceStyles} id="experience">
      {/* Background Image */}
      <div style={backgroundImageStyles}></div>

      {/* Content */}
      <div style={contentStyles}>
        <h1>
          <u> EXPERIENCE </u>
        </h1>

        <div style={{ margin: "0 auto", maxWidth: "1000px" }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              <b><u> B-Trac Solutions Ltd.</u></b> <br />
              <small> Web Application Intern </small>
            </div>
            <div style={{ width: "50%" }}>
              <p> February 2025 - April 2025 </p>
            </div>
          </div>
          <div>
            <p style={{ maxWidth: "400px", margin: "0 auto" }}>
              <p style={{ marginBottom: "20px" }}> - Worked on push notification integration using RabbitMQ and Firebase (Android) /
                Apple APNs (iOS) with JavaScript. </p>
              <p style={{ marginBottom: "20px" }}> - Learned Laravel and Lumen; built a lightweight backend API in Lumen using API
                tokens for authentication. </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
