import { useEffect, useState } from "react";
import navFoot from "../assets/image/navFoot.jpg";

const NavBar = ({ sections }) => {
  const [scrollingSection, setScrollingSection] = useState("info");

  const handleScrollSection = (e, sectionId) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      setScrollingSection(sectionId);
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const NavStyle = {
      width: "100vw",
      margin: "0 auto",
      height: "50px",
      // position: "sticky",
      top: "0",
      left: "0",
      background: "transparent",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    };



  return (
    <nav style={NavStyle}>
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={(e) => {
            handleScrollSection(e, id);
          }}
          style={{ backgroundColor: "transparent" }}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};

export default NavBar;
