import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GithubIcon from "@material-ui/icons/GitHub";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name} </h1>
      <img src={project.image} alt="Project" />

      <p>
        <b>Skills </b>
        {project.skills}
      </p>
      <GithubIcon />
    </div>
  );
}

export default ProjectDisplay;
