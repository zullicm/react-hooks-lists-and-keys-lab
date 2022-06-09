import React from "react";

function ProjectItem({ name, about, technologies, id}) {
  
  const Technologies = technologies.map((tech) => {
    return (
      <span key={tech}>{tech}</span>
    )
  })

  return (
    <div key={id} className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {Technologies}
      </div>
    </div>
  );
}

export default ProjectItem;
