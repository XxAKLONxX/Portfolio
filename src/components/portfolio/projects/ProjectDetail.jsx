import React from 'react';
import { useParams } from 'react-router-dom';
import * as MenuModule from '../../Menu'; // Corrected import path

const ProjectDetail = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);

  console.log("title from URL:", title);
  console.log("Decoded title:", decodedTitle);

  const Menu = MenuModule.Menu;

  const project = Menu.find((item) => {
      const normalizedTitle = item.title.toLowerCase().replace(/\s+/g, '-');
      console.log("Normalized Menu title:", normalizedTitle);
      return normalizedTitle === decodedTitle;
    }
  );

  if (!project) {
    return (
      <section className="project section">
        <h2 className="section__title">Project Not Found</h2>
        <p>Sorry, we couldn't find the project you were looking for.</p>
      </section>
    );
  }

  const { image, category } = project;

  return (
    <section className="project section">
      <h2 className="section__title">{project.title}</h2>
      <div className="project__container">
        <div className="project__content">
          <h3>Category: {category}</h3>
          <p>Project description goes here...</p>
        </div>
        <div className="project__images">
          <img src={image} alt={project.title} />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;