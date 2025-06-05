import { useEffect, useState } from "react";
import skillsBG from "../assets/image/skillsBG.jpg";
import expressJs from "../assets/icons/expressJs.svg";
import mysql from "../assets/icons/mysql.svg";
import mongodb from "../assets/icons/mongodb.svg";
import vscode from "../assets/icons/vscode.svg";
import postman from "../assets/icons/postman.svg";
import laravel from "../assets/icons/laravel.svg";
import lumen from "../assets/icons/Lumen.svg";
import xampp from "../assets/icons/xampp.svg";

const Skills = () => {
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

  const skillsStyle = {
    width: "100vw",
    paddingBottom: isMobile ? "100px" : isTablet ? "150px" : "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5px",
    paddingTop: isMobile ? "50px" : isTablet ? "75px" : "100px",
    backgroundColor: "black",
    position: "relative",
  };

  const backgroundImageStyles = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${skillsBG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.3,
    zIndex: 0,
  };

  const contentStyles = {
    position: "relative",
    zIndex: 1,
  };

  const headerStyle = {
    color: "white",
    margin: "0 auto",
    textTransform: "uppercase",
    paddingBottom: isMobile ? "15px" : "25px",
    fontSize: isMobile ? "1.5rem" : isTablet ? "2rem" : "2.5rem",
  };

  const skillSectionStyle = {
    height: isMobile ? "auto" : "100px",
    width: isMobile ? "95vw" : "80vw",
    margin: "0 auto",
    paddingBottom: isMobile ? "20px" : "5px",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    gap: isMobile ? "15px" : "0",
  };

  const skillHeaderStyle = {
    color: "white",
    marginRight: isMobile ? "0" : "50px",
    marginBottom: isMobile ? "10px" : "0",
    fontSize: isMobile ? "1.2rem" : isTablet ? "1.4rem" : "1.6rem",
    textAlign: isMobile ? "center" : "left",
  };

  const skillItemsContainerStyle = {
    display: "flex",
    flexWrap: isMobile ? "wrap" : "nowrap",
    justifyContent: "center",
    alignItems: "center",
    gap: isMobile ? "15px" : "20px",
    width: isMobile ? "100%" : "auto",
  };

  const iconStyle = {
    fontSize: isMobile ? "35px" : isTablet ? "45px" : "50px",
  };

  const imageStyle = {
    width: isMobile ? "35px" : isTablet ? "40px" : "50px",
    height: isMobile ? "35px" : isTablet ? "40px" : "50px",
    objectFit: "contain",
  };

  const smallImageStyle = {
    width: isMobile ? "30px" : isTablet ? "35px" : "40px",
    height: isMobile ? "30px" : isTablet ? "35px" : "40px",
    objectFit: "contain",
  };

  return (
    <div style={skillsStyle} id="skills">
      {/* Background Image */}
      <div style={backgroundImageStyles}></div>

      {/* Content */}
      <div style={contentStyles}>
        <h1 style={headerStyle}>
          <u>Skills</u>
        </h1>

        <div className="language" style={skillSectionStyle}>
          <h2 style={skillHeaderStyle}>Language:</h2>
          <div style={skillItemsContainerStyle}>
            <i
              className="fa-brands fa-html5 fa-2xs"
              style={{ ...iconStyle, color: "orange" }}
            ></i>
            <i
              className="fa-brands fa-css3-alt fa-2xs"
              style={{ ...iconStyle, color: "#74C0FC" }}
            ></i>
            <i
              className="fa-brands fa-js fa-2xs"
              style={{ ...iconStyle, color: "yellow" }}
            ></i>
            <i
              className="fa-brands fa-php fa-2xs"
              style={{ ...iconStyle, color: "#3c50c3" }}
            ></i>
            <i
              className="fa-solid fa-c fa-2xs"
              style={{ ...iconStyle, color: "#00FF00" }}
            ></i>
          </div>
        </div>

        <div className="framework" style={skillSectionStyle}>
          <h2 style={skillHeaderStyle}>Framework:</h2>
          <div style={skillItemsContainerStyle}>
            <i
              className="fa-brands fa-bootstrap fa-2xs"
              style={{ ...iconStyle, color: "blue" }}
            ></i>
            <i
              className="fa-brands fa-react fa-2xs"
              style={{ ...iconStyle, color: "#74C0FC" }}
            ></i>
            <i
              className="fa-brands fa-node fa-2xs"
              style={{ ...iconStyle, color: "#008080" }}
            ></i>
            <img
              src={expressJs}
              alt="ExpressJs"
              style={smallImageStyle}
            />
            <img
              src={laravel}
              alt="Laravel"
              style={smallImageStyle}
            />
            <img
              src={lumen}
              alt="Lumen"
              style={smallImageStyle}
            />
          </div>
        </div>

        <div className="database" style={skillSectionStyle}>
          <h2 style={skillHeaderStyle}>Database:</h2>
          <div style={skillItemsContainerStyle}>
            <img
              src={mysql}
              alt="MySQL"
              style={imageStyle}
            />
            <img
              src={mongodb}
              alt="MongoDB"
              style={imageStyle}
            />
          </div>
        </div>

        <div className="tools" style={skillSectionStyle}>
          <h2 style={skillHeaderStyle}>Tools:</h2>
          <div style={skillItemsContainerStyle}>
            <i
              className="fa-brands fa-git fa-2xs"
              style={{ ...iconStyle, color: "orange" }}
            ></i>
            <i
              className="fa-brands fa-github fa-2xs"
              style={{ ...iconStyle, color: "white" }}
            ></i>
            <img
              src={vscode}
              alt="VSCode"
              style={imageStyle}
            />
            <img
              src={postman}
              alt="Postman"
              style={imageStyle}
            />
            <i
              className="fa-brands fa-figma fa-2xs"
              style={{ ...iconStyle, color: "maroon" }}
            ></i>
            <img
              src={xampp}
              alt="Xampp"
              style={smallImageStyle}
            />
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

export default Skills;
