import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../assets/assets";


const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) return <h1>Project Not Found</h1>;

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <p>SCOPE ● {project.scope}</p>

      <p className="desc">{project.description}</p>

      <div className="project-images">
        {project.images.map((img, i) => (
          <img key={i} src={img} alt="" />
  
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
