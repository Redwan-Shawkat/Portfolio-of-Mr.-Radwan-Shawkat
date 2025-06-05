import { useEffect, useState } from "react";
import ExperienceBG from '../assets/image/ExperienceBG.jpg';

// const experienceStyles = {
//   margin: "0 auto",
//   width: "100vw",
//   paddingBottom: "100px",
//   paddingTop: "100px",
//   position: "relative",
// };

// const backgroundImageStyles = {
//   position: "absolute",
//   top: "0",
//   left: "0",
//   width: "100%",
//   height: "100%",
//   backgroundImage: `url(${ExperienceBG})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   opacity: 0.3,
//   zIndex: 0,
// };

// const contentStyles = {
//   position: "relative",
//   zIndex: 1,
// };


const Experience = () => {
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

  const experienceStyles = {
    margin: "0 auto",
    width: "100vw",
    paddingBottom: isMobile ? "80px" : isTablet ? "90px" : "100px",
    paddingTop: isMobile ? "80px" : isTablet ? "90px" : "100px",
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
    padding: isMobile ? "0 20px" : isTablet ? "0 40px" : "0 60px",
  };

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
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row"
          }}>
            <div style={{ width: isMobile ? "100%" : "50%" }}>
              <b><u> B-Trac Solutions Ltd.</u></b> <br />
              <small> Web Application Intern </small>
            </div>
            <div style={{
              width: isMobile ? "100%" : "50%",
              textAlign: isMobile ? "left" : "right"
            }}>
              <p> February 2025 - April 2025 </p>
            </div>
          </div>
          <div>
            <p style={{
              maxWidth: isMobile ? "100%" : "400px",
              margin: "0 auto"
            }}>
              <p style={{ marginBottom: "20px" }}> - Worked on push notification integration using RabbitMQ and Firebase (Android) /
                Apple APNs (iOS) with JavaScript. </p>
              <p style={{ marginBottom: "20px" }}> - Learned Laravel and Lumen; built a lightweight backend API in Lumen using API
                tokens for authentication. </p>
            </p>
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

export default Experience;

