import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
// import EmailIcon from "@material-ui/core/Mail";
import "../styles/Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="about">
        <h2> Hi, I am Ambreen </h2>
        <div className="prompt">
          <p> A PhD Student with a passion for learning and Creating</p>
          <LinkedInIcon />
          {/* <EmailIcon /> */}
          <GithubIcon />
        </div>
      </div>

      <div className="skills">
        <h1> Skills</h1>
        <ol>
          {" "}
          <li className="item">
            <h2>Front End </h2>
          </li>
          <li>
            <h2>Back-end </h2>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
