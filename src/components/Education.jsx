import { useEffect, useState } from "react";
import eduBG from "../assets/image/eduBG.jpg";

// const educationStyles = {
//   width: "100vw",
//   paddingTop: "100px",
//   backgroundColor: "black",
//   // marginTop: "50px",
//   position: "relative",
//   overflow: "hidden",
// };


const Education = () => {
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

  const educationStyles = {
    width: "100vw",
    paddingTop: isMobile ? "80px" : isTablet ? "90px" : "100px",
    paddingBottom: isMobile ? "80px" : isTablet ? "120px" : "150px",
    backgroundColor: "black",
    position: "relative",
    overflow: "hidden",
  };

  const backgroundImageStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${eduBG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.2,
    zIndex: 1,
  };

  const contentStyles = {
    position: "relative",
    zIndex: 2,
    padding: isMobile ? "0 20px" : isTablet ? "0 40px" : "0 60px",
  };

  const titleStyles = {
    textAlign: "center",
    marginBottom: isMobile ? "30px" : isTablet ? "40px" : "50px",
    fontSize: isMobile ? "1.5rem" : isTablet ? "2rem" : "2.5rem",
  };

  const cardContainerStyles = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "20px" : "0",
    justifyContent: isMobile ? "center" : "space-between",
    alignItems: isMobile ? "center" : "stretch",
  };

  const cardStyles = {
    margin: isMobile ? "0" : "30px",
    width: isMobile ? "100%" : isTablet ? "30%" : "33.33%",
    maxWidth: isMobile ? "400px" : "none",
    padding: isMobile ? "20px" : "15px",
    backgroundColor: isMobile ? "rgba(255, 255, 255, 0.05)" : "transparent",
    borderRadius: isMobile ? "8px" : "0",
    border: isMobile ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
  };

  const cardTitleStyles = {
    fontSize: isMobile ? "1.1rem" : isTablet ? "1rem" : "1.1rem",
    marginBottom: "10px",
    lineHeight: "1.3",
  };

  const cardTextStyles = {
    fontSize: isMobile ? "0.95rem" : isTablet ? "0.9rem" : "1rem",
    lineHeight: "1.4",
    marginBottom: "8px",
  };

  return (
    <div style={educationStyles} id="education">
      {/* Background Image */}
      <div style={backgroundImageStyles}></div>

      {/* Content */}
      <div style={contentStyles}>
        <h1 style={titleStyles}>
          <u>Academic Qualifications</u>
        </h1>

        <div style={cardContainerStyles}>
          <div style={cardStyles}>
            <b style={cardTitleStyles}>
              <u>BACHELOR OF SCIENCE (B.Sc.)</u>
            </b>
            <p style={cardTextStyles}>Daffodil International University</p>
            <p style={cardTextStyles}>Department of Software Engineering</p>
            <p style={cardTextStyles}>Passed Year: 2023</p>
            <p style={cardTextStyles}>CGPA 3.63 out of 4.00</p>
          </div>

          <div style={cardStyles}>
            <b style={cardTitleStyles}>
              <u>HIGHER SECONDARY SCHOOL CERTIFICATE (H.Sc.)</u>
            </b>
            <p style={cardTextStyles}>Mohammadpur Model School & College</p>
            <p style={cardTextStyles}>Dhaka Board</p>
            <p style={cardTextStyles}>Science (Group)</p>
            <p style={cardTextStyles}>Passed Year: 2018</p>
            <p style={cardTextStyles}>GPA 3.75 out of 5.00</p>
          </div>

          <div style={cardStyles}>
            <b style={cardTitleStyles}>
              <u>SECONDARY SCHOOL CERTIFICATE (S.Sc.)</u>
            </b>
            <p style={cardTextStyles}>Mohammadpur Model School & College</p>
            <p style={cardTextStyles}>Dhaka Board</p>
            <p style={cardTextStyles}>Science (Group)</p>
            <p style={cardTextStyles}>Passed Year: 2016</p>
            <p style={cardTextStyles}>GPA 4.83 out of 5.00</p>
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


export default Education;

