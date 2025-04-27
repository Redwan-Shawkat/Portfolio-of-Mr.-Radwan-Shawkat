import eduBG from "../assets/image/eduBG.jpg";

const educationStyles = {
  width: "100vw",
  paddingTop: "100px",
  backgroundColor: "black",
  // marginTop: "50px",
  position: "relative",
  overflow: "hidden",
};


const Education = () => {

  return (

    <div style={educationStyles} id="education">
      <h1>
        <u>Academic Qualifications </u>
             <a href={eduBG}></a>
              <div
                style={{
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
                }}
              ></div>
      </h1>

      <div style={{ position: "relative", zIndex: 2 }}>
      <div style={{display: "flex"}}>
          <div style={{margin: '30px', width: '33.33%'}}>
            <b> <u>BACHELOR OF SCIENCE (B.Sc.) </u> </b>
            <p> Daffodil International University </p>
            <p> Department of Software Engineering </p>
            <p> Passed Year: 2023 </p>
            <p> CGPA 3.63 out of 4.00 </p>
          </div>

          <div style={{margin: '30px', width: '33.33%'}}>
            <b><u> HIGHER SECONDARY SCHOOL CERTIFICATE (H.Sc.) </u></b>
            <p> Mohammadpur Model School & College </p>
            <p> Dhaka Board </p>
            <p> Science (Group) </p>
            <p> Passed Year: 2018 </p>
            <p> GPA 3.75 out of 5.00 </p>
          </div>

          <div style={{margin: '30px', width: '33.33%'}}>
            <b><u> SECONDARY SCHOOL CERTIFICATE (S.Sc.) </u></b>
            <p> Mohammadpur Model School & College </p>
            <p> Dhaka Board </p>
            <p> Science (Group) </p>
            <p> Passed Year: 2016 </p>
            <p> GPA 4.83 out of 5.00 </p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Education;

