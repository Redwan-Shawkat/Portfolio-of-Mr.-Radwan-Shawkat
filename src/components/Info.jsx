// import { useEffect, useState } from "react";
// import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";

import person from "../assets/image/person.png";

import infoBG from "../assets/image/infoBG.jpg";

// import anotherPerson from "../assets/image/anotherPerson.png";

const Info = () => {
  const infoStyle = {
    margin: "0 auto",
    width: "100vw",
    backgroundColor: "black",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: "1.5rem",
    textShadow: "2px 2px 0px black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: "200px",
    paddingTop: "200px",
    // marginTop: "50px",
    position: "relative",
    overflow: "hidden",
  };

  const iconLinks = {
    fontSize: "40px",
    margin: "0 10px",
  };

  return (
    <div id="info" className="infoStyle">
      <a href={infoBG}></a>
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
        <div
          style={{
            display: "flex",
            maxWidth: "1000px",
            width: "700px",
            margin: "0 auto",
          }}
        >
          <div className="texts">
            <p> Mohammad Radwan Shawkat </p>
            <p> redwanshawkat@gmail.com </p>
            <p> +8801632-108860 </p>

            {/* Social Links */}
            <section style={iconLinks}>
              <a
                href="https://github.com/Redwan-Shawkat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    marginRight: "25px",
                  }}
                />
              </a>

              <a
                href="https://www.facebook.com/redwanshawkat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    marginRight: "25px",
                  }}
                />
              </a>
            </section>
          </div>
          {/* <div className='person_imgcontainer'>
            <img src={person} alt="Picture" className="person_imgstyle"/>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Info;
