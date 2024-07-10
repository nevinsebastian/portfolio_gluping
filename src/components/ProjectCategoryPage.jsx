import React from "react";
import { useParams } from "react-router-dom";

const ProjectCategoryPage = ({ data }) => {
  const { category } = useParams(); // Get category from URL params

  // Filter projects based on category
  const projects = data.filter((d) => d.category === category);

  return (
    <div className="container">
      <h2>{category} Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4">
            <div className="card">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCategoryPage;
