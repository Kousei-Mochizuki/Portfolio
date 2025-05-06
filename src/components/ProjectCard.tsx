import React, { useState } from 'react';
// import '../styles/ProjectCard.css';
import './ProjectCard.css'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image-container">
        <img 
          src={project.image} 
          alt={project.title} 
          className="project-image" 
        />
        <div className="project-overlay"></div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        
        <a href={project.link} className="project-link">
          <span className="project-link-text">View Project</span>
          <span className="project-link-arrow">→</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;