import { useEffect, useState } from "react";
import TrainingBG from "../assets/image/TrainingBG.jpg";

// const trainingStyle = {
//   backgroundColor: "black",
//   width: "100vw",
//   margin: "0 auto",
//   paddingBottom: "200px",
//   paddingTop: "100px",
//   position: "relative",
// };

// const backgroundImageStyles = {
//   position: "absolute",
//   top: "0",
//   left: "0",
//   width: "100%",
//   height: "100%",
//   backgroundImage: `url(${TrainingBG})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   opacity: 0.3,
//   zIndex: 0,
// };

// const contentStyles = {
//   position: "relative",
//   zIndex: 1, // Ensures the content stays above the background image
// };


const Training = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Breakpoints
  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024;
  const isDesktop = windowSize.width >= 1024;

  const trainingStyle = {
    backgroundColor: "black",
    width: "100vw",
    margin: "0 auto",
    paddingBottom: isMobile ? "100px" : isTablet ? "150px" : "200px",
    paddingTop: isMobile ? "80px" : isTablet ? "90px" : "100px",
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
    zIndex: 1,
    padding: isMobile ? "0 20px" : isTablet ? "0 40px" : "0 60px",
  };

  return (
    <div style={trainingStyle} id="training">
      {/* Background Image */}
      <div style={backgroundImageStyles}>

      </div>

      {/* Content */}
      <div style={contentStyles}>
        <h1 style={{ textAlign: "center" }}>
          <u> TRAINING </u>
        </h1>

        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row"
        }}>
          <div style={{
            width: isMobile ? "100%" : "50%",
            margin: isMobile ? "30px 0" : "50px"
          }}>
            <b> MERN Stack Web Development </b>
            <p> Interactive Cares </p>
            <p> Learnt About HTML, CSS, JavaScript, Bootstrap, <br /> React, React Redux, Expressjs, Nodejs, MongoDB, Postman </p>
            <p> Duration: 7 months </p>
            <a href="https://drive.google.com/file/d/1BDudvC4aJiRqdTGDLcndi00enOpr9d8z/view?usp=sharing" target="_blank" rel="noopener noreferrer"> Certificate </a>
          </div>

          <div style={{
            width: isMobile ? "100%" : "50%",
            margin: isMobile ? "30px 0" : "50px"
          }}>
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

      {/* Debug info */}
      <div style={{
        position: "absolute",
        bottom: "10px",
        right: "10px",
        color: "white",
        fontSize: "12px",
        zIndex: 3,
        background: "rgba(0,0,0,0.5)",
        padding: "5px 10px",
        borderRadius: "4px",
      }}>
        {/* {isMobile ? "Mobile" : isTablet ? "Tablet" : "Desktop"} ({windowSize.width}px) */}
      </div>
    </div>
  );
};

export default Training;

