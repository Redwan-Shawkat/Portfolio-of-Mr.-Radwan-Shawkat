import { useEffect, useState } from "react";
import projectsBG from '../assets/image/projectsBG.jpg';

const Projects = () => {
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

  const projectStyles = {
    backgroundColor: "black",
    width: "100vw",
    paddingBottom: isMobile ? "100px" : isTablet ? "150px" : "200px",
    paddingTop: isMobile ? "50px" : isTablet ? "75px" : "100px",
    position: "relative",
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
    padding: isMobile ? "0 20px" : isTablet ? "0 40px" : "0 60px",
  };

  const headerStyle = {
    color: "white",
    textAlign: "center",
    fontSize: isMobile ? "1.8rem" : isTablet ? "2.2rem" : "2.5rem",
    marginBottom: isMobile ? "30px" : isTablet ? "40px" : "50px",
  };

  const projectsContainerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : isTablet ? "column" : "row",
    flexWrap: isDesktop ? "wrap" : "nowrap",
    justifyContent: "center",
    alignItems: isMobile ? "center" : "flex-start",
    gap: isMobile ? "30px" : isTablet ? "40px" : "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const projectItemStyle = {
    width: isMobile ? "100%" : isTablet ? "90%" : "22%",
    minWidth: isMobile ? "280px" : isTablet ? "300px" : "250px",
    margin: isMobile ? "0" : isTablet ? "20px 0" : "30px",
    padding: isMobile ? "20px" : "25px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    backdropFilter: "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    color: "white",
  };

  const projectTitleStyle = {
    fontSize: isMobile ? "1.3rem" : isTablet ? "1.4rem" : "1.2rem",
    marginBottom: isMobile ? "15px" : "12px",
    color: "white",
    fontWeight: "bold",
  };

  const projectDescriptionStyle = {
    fontSize: isMobile ? "1rem" : isTablet ? "1rem" : "0.9rem",
    lineHeight: "1.6",
    marginBottom: isMobile ? "20px" : "15px",
    color: "rgba(255, 255, 255, 0.9)",
  };

  const linksContainerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "10px" : "5px",
    flexWrap: "wrap",
  };

  const linkStyle = {
    color: "#74C0FC",
    textDecoration: "none",
    fontSize: isMobile ? "0.85rem" : "0.9rem",
    padding: isMobile ? "6px 10px" : "5px 8px",
    borderRadius: "5px",
    backgroundColor: "rgba(116, 192, 252, 0.1)",
    border: "1px solid rgba(116, 192, 252, 0.3)",
    textAlign: "center",
    flex: isMobile ? "none" : "1",
    transition: "all 0.3s ease",
  };

  const singleLinkStyle = {
    ...linkStyle,
    width: isMobile ? "100%" : "auto",
    textAlign: "center",
  };

  return (
    <div style={projectStyles} id="projects">
      {/* Background Image */}
      <div style={backgroundImageStyles}></div>

      {/* Content */}
      <div style={contentStyles}>
        <h1 style={headerStyle}>
          <u>PROJECTS</u>
        </h1>

        <div style={projectsContainerStyle}>
          <div style={projectItemStyle}>
            <div style={projectTitleStyle}>Push Notification</div>
            <p style={projectDescriptionStyle}>
              Push notification integration using RabbitMQ and Firebase (Android) / Apple APNs (iOS) with JavaScript
            </p>
            <div style={linksContainerStyle}>
              <a
                href="https://github.com/Redwan-Shawkat/push-notification"
                target="_blank"
                rel="noopener noreferrer"
                style={singleLinkStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(116, 192, 252, 0.2)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgba(116, 192, 252, 0.1)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Repository
              </a>
            </div>
          </div>

          <div style={projectItemStyle}>
            <div style={projectTitleStyle}>SMS Distribution</div>
            <p style={projectDescriptionStyle}>
              Built a secure SMS gateway microservice in Lumen with API authentication, third-party SMS provider integration, and delivery logging.
            </p>
            <div style={linksContainerStyle}>
              <a
                href="https://github.com/Redwan-Shawkat/Send-SMS"
                target="_blank"
                rel="noopener noreferrer"
                style={singleLinkStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(116, 192, 252, 0.2)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgba(116, 192, 252, 0.1)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Repository
              </a>
            </div>
          </div>

          <div style={projectItemStyle}>
            <div style={projectTitleStyle}>Weather App</div>
            <p style={projectDescriptionStyle}>
              A weather app is created using HTML, CSS, JavaScript Query, API
            </p>
            <div style={linksContainerStyle}>
              <a
                href="https://github.com/Redwan-Shawkat/Weather-APP"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(116, 192, 252, 0.2)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgba(116, 192, 252, 0.1)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Repository
              </a>
              <a
                href="https://redwan-shawkat.github.io/Weather-APP/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(116, 192, 252, 0.2)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgba(116, 192, 252, 0.1)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Preview
              </a>
              <a
                href="https://www.youtube.com/watch?v=tb6AgtCxceQ"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(116, 192, 252, 0.2)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgba(116, 192, 252, 0.1)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Video
              </a>
            </div>
          </div>

          <div style={projectItemStyle}>
            <div style={projectTitleStyle}>Portfolio Website</div>
            <p style={projectDescriptionStyle}>
              A portfolio website is designed using HTML, CSS & React.
            </p>
            <div style={linksContainerStyle}>
              <a
                href="https://github.com/Redwan-Shawkat/portfolio_one"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(116, 192, 252, 0.2)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgba(116, 192, 252, 0.1)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Repository
              </a>
              <a
                href="https://portfolio-red-navy-six.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(116, 192, 252, 0.2)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgba(116, 192, 252, 0.1)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Preview
              </a>
              <a
                href="https://youtu.be/eng0xxuCkYw"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(116, 192, 252, 0.2)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgba(116, 192, 252, 0.1)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Video
              </a>
            </div>
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

export default Projects;
