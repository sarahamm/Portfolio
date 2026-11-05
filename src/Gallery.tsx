import { Link } from "react-router-dom";
import "./Projectgallery.css";
import { ProjectData } from "./projectData.tsx";

export function ProjectCard({ project ,index}: { project: (typeof ProjectData)[number]; index: number }) {
   const to = `/project/${project.id}`;

  return (
    <li >
      
      <Link
        className="project-card__media"
        to={to}
        aria-label={`Open ${project.name} showcase`}
      >
        <img className="project-card__image" src={project.image[0]} alt={project.alt || `${project.name} project preview`} loading="lazy" />
        <span className="project-card__arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </span>
      </Link>
    
      <div className="project-card__footer">
        <div className="project-card__text">
          <h3 className="project-card__title">
            {project.id} — {project.name}
          </h3>
          <p className="project-card__role">{project.role}</p>
        </div>
        <Link className="project-card__button" to={to}>
          View showcase
        </Link>
      </div>
    </li>
  );

 
    // <li className="project-card-gallery">
    //   {project.src ? (
    //     <a className="project-card__link" href={project.src} target="_blank" rel="noopener noreferrer">
    //       {content}
    //     </a>
    //   ) : (
    //     content
    //   )}
    // </li>
  
}

export default function Gallery() {
 return (
    <ul className="project-gallery">
      {ProjectData.map((project, i) => (
        <ProjectCard key={project.id ?? i} project={project} index={i} />
      ))}
    </ul>
  );
}

