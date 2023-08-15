import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1>My Selected Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => (
          <ProjectItem id={idx} name={project.name} image={project.image} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
