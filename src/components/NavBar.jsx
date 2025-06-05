import { useEffect, useState } from "react";
import navFoot from "../assets/image/navFoot.jpg";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

const NavBar = ({ sections = [
  { id: "info", label: "Info" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" }
] }) => {
  const [scrollingSection, setScrollingSection] = useState("info");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const handleScrollSection = (e, sectionId) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      setScrollingSection(sectionId);
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close dropdown on mobile after selection
      if (isMobile) {
        setIsDropdownOpen(false);
      }
    }
  };

  const NavStyle = {
    width: "100vw",
    margin: "0 auto",
    height: isMobile ? "60px" : isTablet ? "55px" : "50px",
    top: "0",
    left: "0",
    background: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    position: "relative",
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    padding: isMobile ? "6px 12px" : isTablet ? "8px 16px" : "10px 20px",
    fontSize: isMobile ? "14px" : isTablet ? "15px" : "16px",
    fontWeight: isMobile ? "500" : "400",
    color: "#333",
    borderRadius: isMobile ? "4px" : "6px",
    transition: "all 0.3s ease",
    minWidth: isMobile ? "auto" : isTablet ? "80px" : "100px",
    textAlign: "center",
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: isMobile ? "#007bff" : isTablet ? "#0056b3" : "#004085",
    color: "white",
    transform: isMobile ? "scale(1.05)" : "scale(1.1)",
  };

  const dropdownToggleStyle = {
    backgroundColor: "transparent",
    border: "1px solid #333",
    cursor: "pointer",
    padding: "8px 16px",
    fontSize: "16px",
    fontWeight: "500",
    color: "#333",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const dropdownMenuStyle = {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    background: "white",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    minWidth: "200px",
    display: isDropdownOpen ? "block" : "none",
    overflow: "hidden",
  };

  const dropdownItemStyle = {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "12px 16px",
    width: "100%",
    textAlign: "left",
    display: "block",
    fontSize: "14px",
    color: "#333",
    borderBottom: "1px solid #eee",
    transition: "background-color 0.2s ease",
  };

  return (
    <nav style={NavStyle}>
      {isMobile ? (
        // Mobile: Dropdown menu
        <div>
          <button
            style={dropdownToggleStyle}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Menu {isDropdownOpen ? "▲" : "▼"}
          </button>
          <div style={dropdownMenuStyle}>
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={(e) => handleScrollSection(e, id)}
                style={dropdownItemStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#f8f9fa";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        // Tablet and Desktop: Horizontal nav with active states
        sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={(e) => handleScrollSection(e, id)}
            style={scrollingSection === id ? activeButtonStyle : buttonStyle}
            onMouseEnter={(e) => {
              if (scrollingSection !== id) {
                e.target.style.backgroundColor = isTablet ? "#e9ecef" : "#f8f9fa";
                e.target.style.transform = "translateY(-2px)";
              }
            }}
            onMouseLeave={(e) => {
              if (scrollingSection !== id) {
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "translateY(0)";
              }
            }}
          >
            {label}
          </button>
        ))
      )}


    </nav>
  );
};

export default NavBar;
