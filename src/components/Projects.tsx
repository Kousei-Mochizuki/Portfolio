import React from 'react';
import ProjectCard from './ProjectCard';
// import '../styles/Projects.css';
import './Projects.css'

// Define project data type
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "Modicter",
    description: "『コトダマ』の領域を上手く活用し、コトバのチカラを本に付与しながら進む3D領域変化パズルアクション。",
    image: "public/images/Modicter_01.png",
    tags: ["Unity", "C#", "Game design", "Character design", "Level design", "3D Modeling (一部)"],
    link: "#"
  },
  {
    id: 2,
    title: "爻鋼ノ刃",
    description: "刀を構え、敵の攻撃にあわせ交差。隙を狙って必殺技を叩き込め！",
    image: "public/images/爻鋼ノ刃_01.png",
    tags: ["Unity", "C#", "Game design"],
    link: "#"
  },
  {
    id: 3,
    title: "Dungeon Crawler",
    description: "プレーステキスト",
    image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Pyxel", "Python", "Game Design", "Pixel Art"],
    link: "#"
  },
  {
    id: 4,
    title: "Space Commander",
    description: "プレーステキスト",
    image: "https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Unity", "C#", "AI Programming", "Multiplayer"],
    link: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="projects-cta">
        <a href="#" className="button button-secondary">View All Projects</a>
      </div>
    </section>
  );
};

export default Projects;