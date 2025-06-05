import { useEffect, useState } from "react";

const Footer = () => {
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

  const footerStyles = {
    backgroundColor: "#222",
    color: "#fff",
    padding: isMobile ? "30px 20px" : isTablet ? "25px 30px" : "20px",
    textAlign: "center",
    width: "100vw",
    position: "relative",
  };

  const copyrightStyles = {
    fontSize: isMobile ? "0.9rem" : isTablet ? "1rem" : "1rem",
    marginBottom: isMobile ? "15px" : "10px",
    lineHeight: "1.4",
  };

  const contactStyles = {
    fontSize: isMobile ? "0.85rem" : isTablet ? "0.95rem" : "1rem",
    marginBottom: isMobile ? "15px" : "10px",
    lineHeight: isMobile ? "1.6" : "1.4",
    wordBreak: isMobile ? "break-word" : "normal",
  };

  const socialLinksStyles = {
    fontSize: isMobile ? "0.9rem" : isTablet ? "1rem" : "1rem",
    lineHeight: "1.4",
  };

  const linkStyles = {
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  const separatorStyles = {
    margin: isMobile ? "0 8px" : "0 10px",
    color: "#ccc",
  };

  return (
    <div style={footerStyles}>
      <p style={copyrightStyles}>
        © 2025 Mohammad Radwan Shawkat. All Rights Reserved.
      </p>

      <p style={contactStyles}>
        {isMobile ? (
          <>
            Contact:<br />
            <a href="mailto:redwanshawkat@gmail.com" style={linkStyles}>
              redwanshawkat@gmail.com
            </a>
            <br />
            <a href="tel:+8801632108860" style={linkStyles}>
              +8801632-108860
            </a>
          </>
        ) : (
          <>
            Contact:
            <a href="mailto:redwanshawkat@gmail.com" style={linkStyles}>
              redwanshawkat@gmail.com
            </a>
            {" | "}
            <a href="tel:+8801632108860" style={linkStyles}>
              +8801632-108860
            </a>
          </>
        )}
      </p>

      <p style={socialLinksStyles}>
        <a
          href="https://github.com/Redwan-Shawkat"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
          onMouseEnter={(e) => e.target.style.color = "#4CAF50"}
          onMouseLeave={(e) => e.target.style.color = "white"}
        >
          GitHub
        </a>
        <span style={separatorStyles}>|</span>
        <a
          href="https://www.linkedin.com/in/radwan-shawkat"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
          onMouseEnter={(e) => e.target.style.color = "#0077B5"}
          onMouseLeave={(e) => e.target.style.color = "white"}
        >
          LinkedIn
        </a>
      </p>

      {/* Debug info */}
      <div style={{
        position: "absolute",
        bottom: "5px",
        right: "10px",
        color: "#888",
        fontSize: "10px",
        background: "rgba(0,0,0,0.3)",
        padding: "2px 6px",
        borderRadius: "3px",
      }}>
        {/* {isMobile ? "Mobile" : isTablet ? "Tablet" : "Desktop"} ({windowSize.width}px) */}
      </div>
    </div>
  );
};

export default Footer;
