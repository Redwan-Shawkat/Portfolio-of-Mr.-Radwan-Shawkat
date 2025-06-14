import skillsBG from "../assets/image/skillsBG.jpg";
import expressJs from "../assets/icons/expressJs.svg";
import mysql from "../assets/icons/mysql.svg";
import mongodb from "../assets/icons/mongodb.svg";
import vscode from "../assets/icons/vscode.svg";
import postman from "../assets/icons/postman.svg";
import laravel from "../assets/icons/laravel.svg";
import lumen from "../assets/icons/Lumen.svg";
import xampp from "../assets/icons/xampp.svg";

const skillsStyle = {
  width: "100vw",
  paddingBottom: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "5px",
  paddingTop: "100px",
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

const Skills = () => {
  return (
    <div  id="skills" className="skillStyle">
      {/* Background Image */}
      <div style={backgroundImageStyles}></div>

      {/* Content */}
      <div style={contentStyles}>
        <h1
          className="skillheading"
        ><u>
          Skills
          </u>
        </h1>

        <div
          className="language_label"
        >
          <h2 style={{ color: "white", marginRight: "50px" }}>Language: </h2>
          <i
            className="fa-brands fa-html5 fa-2xs"
            // id="html-icon"
            style={{ fontSize: "50px", color: "orange", marginRight: "20px" }}
          ></i>

          <i
            className="fa-brands fa-css3-alt fa-2xs"
            style={{ color: "#74C0FC", fontSize: "50px", marginRight: "20px" }}
          ></i>

          <i
            className="fa-brands fa-js fa-2xs"
            style={{ color: "yellow", fontSize: "50px", marginRight: "20px" }}
          ></i>

          <i
            className="fa-brands fa-php fa-2xs"
            style={{ color: "#3c50c3", fontSize: "50px", marginRight: "20px" }}
          ></i>

          <i
            className="fa-solid fa-c fa-2xs"
            style={{ color: "#00FF00", fontSize: "50px", marginRight: "20px" }}
          ></i>
        </div>

        <div
          className="framework_label"
        >
          <h2 style={{ color: "white", marginRight: "50px" }}>Framework: </h2>

          <i
            className="fa-brands fa-bootstrap fa-2xs"
            style={{ color: "blue", fontSize: "50px", marginRight: "20px" }}
          ></i>

          <i
            className="fa-brands fa-react fa-2xs"
            style={{ color: "#74C0FC", fontSize: "50px", marginRight: "20px" }}
          ></i>

          <i
            className="fa-brands fa-node fa-2xs"
            style={{ color: "#008080", fontSize: "50px", marginRight: "20px" }}
          ></i>

          <img
            src={expressJs}
            alt="ExpressJs"
            style={{ width: "40px", height: "250px", marginRight: "20px" }}
          />

          <img
            src={laravel}
            alt="Laravel"
            style={{ width: "40px", height: "250px", marginRight: "20px" }}
          />


          <img
            src={lumen}
            alt="Lumen"
            style={{ width: "40px", height: "250px", marginRight: "20px" }}
          />


        </div>

        <div
          className="database_label"
        >
          <h2 style={{ color: "white", marginRight: "50px" }}>Database: </h2>

          <img
            src={mysql}
            alt="MySQL"
            style={{ width: "50px", height: "250px", marginRight: "50px" }}
          />
          <img
            src={mongodb}
            alt="MongoDB"
            style={{ width: "50px", height: "250px" }}
          />
        </div>

        <div
          className="tools_label"
        >
          <h2 style={{ color: "white", marginRight: "50px" }}>Tools: </h2>

          <i
            className="fa-brands fa-git fa-2xs"
            style={{ color: "orange", fontSize: "50px", marginRight: "20px" }}
          ></i>
          <i
            className="fa-brands fa-github fa-2xs"
            style={{ fontSize: "50px", marginRight: "20px" }}
          ></i>
          <img
            src={vscode}
            alt="VSCode"
            style={{ width: "50px", height: "250px", marginRight: "20px" }}
          />
          <img
            src={postman}
            alt="Postman"
            style={{ width: "50px", height: "250px", marginRight: "20px" }}
          />
          <i
            className="fa-brands fa-figma fa-2xs"
            style={{ color: "maroon", fontSize: "50px", marginRight: "20px" }}
          ></i>
          <img
            src={xampp}
            alt="Xampp"
            style={{ width: "40px", height: "250px", marginRight: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
