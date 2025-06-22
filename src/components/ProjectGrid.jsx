import React from 'react';
import { useProjects } from '../contexts/ProjectContext';
import ProjectCard from './ProjectCard';
import './ProjectGrid.css';

const ProjectGrid = () => {
  const { filteredProjects } = useProjects();

  if (filteredProjects.length === 0) {
    return (
      <div className="no-projects">
        <div className="no-projects-content">
          <svg className="no-projects-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
          </svg>
          <h3>No projects found</h3>
          <p>Try adjusting your search terms or category filter</p>
        </div>
      </div>
    );
  }

  return (
    <div className="project-grid-container">
      <div className="project-grid">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid; 