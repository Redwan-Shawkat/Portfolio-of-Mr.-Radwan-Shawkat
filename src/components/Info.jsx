import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import person from "../assets/image/person.png";
import infoBG from "../assets/image/infoBG.jpg";

const Info = () => {
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

  const infoStyle = {
    margin: "0 auto",
    width: "100vw",
    backgroundColor: "black",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: isMobile ? "1.2rem" : isTablet ? "1.4rem" : "1.5rem",
    textShadow: "2px 2px 0px black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: isMobile ? "100px" : isTablet ? "150px" : "200px",
    paddingTop: isMobile ? "100px" : isTablet ? "150px" : "200px",
    position: "relative",
    overflow: "hidden",
  };

  const iconLinks = {
    fontSize: isMobile ? "30px" : isTablet ? "35px" : "40px",
    margin: isMobile ? "20px 0" : "0 10px",
    display: isMobile ? "flex" : "inline-block",
    justifyContent: isMobile ? "center" : "flex-start",
    gap: isMobile ? "20px" : "0",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    maxWidth: isMobile ? "100%" : isTablet ? "800px" : "1000px",
    width: isMobile ? "90%" : isTablet ? "700px" : "700px",
    margin: "0 auto",
    alignItems: isMobile ? "center" : "flex-start",
    textAlign: isMobile ? "center" : "left",
  };

  const textSectionStyle = {
    width: isMobile ? "100%" : "50%",
    marginBottom: isMobile ? "30px" : "0",
    padding: isMobile ? "0 20px" : "0",
  };

  const imageSectionStyle = {
    width: isMobile ? "100%" : "50%",
    display: "flex",
    justifyContent: isMobile ? "center" : "flex-end",
    alignItems: "center",
  };

  const imageStyle = {
    height: isMobile ? "200px" : isTablet ? "220px" : "250px",
    width: isMobile ? "160px" : isTablet ? "180px" : "200px",
    borderRadius: isMobile ? "10px" : "0",
    objectFit: "cover",
  };

  return (
    <div id="info" style={infoStyle}>
      <a href={infoBG}></a>
      {/* Background overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${infoBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
          zIndex: 1,
        }}
      ></div>

      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={containerStyle}>
          <div style={textSectionStyle}>
            <p style={{
              color: "white",
              marginBottom: isMobile ? "10px" : "15px",
              fontSize: isMobile ? "1.3rem" : "1.5rem"
            }}>
              Mohammad Radwan Shawkat
            </p>
            <p style={{
              color: "white",
              marginBottom: isMobile ? "10px" : "15px",
              fontSize: isMobile ? "1rem" : "1.2rem"
            }}>
              redwanshawkat@gmail.com
            </p>
            <p style={{
              color: "white",
              marginBottom: isMobile ? "20px" : "15px",
              fontSize: isMobile ? "1rem" : "1.2rem"
            }}>
              +8801632-108860
            </p>

            {/* Social Links */}
            <section style={iconLinks}>
              <a
                href="https://github.com/Redwan-Shawkat"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    marginRight: isMobile ? "0" : "25px",
                    transition: "transform 0.3s ease, color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.2)";
                    e.target.style.color = "#4078c0";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.color = "#fff";
                  }}
                />
              </a>

              <a
                href="https://www.facebook.com/redwanshawkat/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    marginRight: isMobile ? "0" : "25px",
                    transition: "transform 0.3s ease, color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.2)";
                    e.target.style.color = "#1877f2";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.color = "#fff";
                  }}
                />
              </a>
            </section>
          </div>

          <div style={imageSectionStyle}>
            <img
              src={person}
              alt="Picture"
              style={imageStyle}
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

export default Info;
