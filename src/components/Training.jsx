import TrainingBG from "../assets/image/TrainingBG.jpg";

const trainingStyle = {
  backgroundColor: "black",
  width: "100vw",
  margin: "0 auto",
  paddingBottom: "200px",
  paddingTop: "100px",
  position: "relative",
};

const backgroundImageStyles = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundImage: `url(${TrainingBG})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.3,
  zIndex: 0,
};

const contentStyles = {
  position: "relative",
  zIndex: 1, // Ensures the content stays above the background image
};

const Training = () => {
  return (
    <div style={trainingStyle} id="training">
      {/* Background Image */}
      <div style={backgroundImageStyles}></div>

      {/* Content */}
      <div style={contentStyles}>
        <h1 style={{ textAlign: "center" }}>
          <u> TRAINING </u>
        </h1>

        <div style={{ display: "flex" }}>
          <div style={{ width: "50%", margin: "50px" }}>
            <b> MERN Stack Web Development </b>
            <p> Interactive Cares </p>
            <p> Learnt About HTML, CSS, JavaScript, Bootstrap, <br /> React, React Redux, Expressjs, Nodejs, MongoDB, Postman </p>
            <p> Duration: 7 months </p>
            <a href="https://drive.google.com/file/d/1BDudvC4aJiRqdTGDLcndi00enOpr9d8z/view?usp=sharing" target="_blank" rel="noopener noreferrer"> Certificate </a>
          </div>

          <div style={{ width: "50%", margin: "50px" }}>
            <b> Online Web Designer Course </b>
            <p> BDcalling Academy </p>
            <p> Learnt About HTML, CSS, Bootstrap </p>
            <p> Duration: 2 months </p>
            <a href="https://drive.google.com/file/d/1IUt7l_wYbHCctivBEf7ErM6_H5lw84KV/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
