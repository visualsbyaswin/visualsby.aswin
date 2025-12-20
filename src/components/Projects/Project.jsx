import React from "react";
import { Link } from "react-router-dom";

import "./pro.css";
import { projects } from "../../assets/assets";
const ProModels = () => {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <Link
          to={`/project/${project.slug}`}
          key={project.id}
          className="project-card"
        >
          <div className="image-wrapper">
            <img src={project.thumbnail} alt={project.title} />
            <div className="coming-tag">{project.status}</div>
          </div>

          <h3>{project.title}</h3>
          <p>SCOPE ● ({project.scope})</p>
        </Link>
      ))}
    </div>
  );
};

export default ProModels;
