import "./projectInfo.css";
import { isValidElement, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectData } from "./projectData.tsx";

type Skill = { name: string; icon?: unknown };
type SkillGroup = { title: string; skill: Skill[] };

// The icon can be an image path, a React element, or a component (e.g. react-icons)
function renderIcon(icon: unknown): ReactNode {
  if (!icon) return null;
  if (typeof icon === "string") {
    return <img className="project__skill-icon" src={icon} alt="" />;
  }
  if (isValidElement(icon)) return icon;
  if (typeof icon === "function") {
    const Icon = icon as React.ElementType;
    return <Icon className="project__skill-icon" />;
  }
  return null;
}

export default function ProjectInfo() {
  const { id } = useParams<{ id: string }>();
  const project = ProjectData.find((p) => String(p.id) === id);

  const trackRef = useRef<HTMLDivElement>(null);

  // Horizontal scroll of the carousel with the mouse wheel (desktop only)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (!window.matchMedia("(min-width: 861px)").matches) return;
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [project]);

  // Start at the top when opening a project
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <section className="project">
        <p>Project not found.</p>
        <Link to="/">← Back to projects</Link>
      </section>
    );
  }

  const sections = [
    { heading: "What", body: project.what },
    { heading: "Why", body: project.why },
    { heading: "How", body: project.how },
  ];

  const skillGroups: SkillGroup[] =
    (project as { skills?: SkillGroup[] }).skills ?? [];

  // Skip the first image (it is already shown as the project logo/cover)
  const carouselImages = project.image.slice(1);

  return (
    <section className="project-section" aria-labelledby="project-title">
      <div className="project">
        {/* Left column */}
        <div className="project__container">
          <Link to="/" className="project__back">
            ← Back to projects
          </Link>

          <div className="project__logo-box">
            <img
              className="project__logo"
              src={project.imageLogo}
              alt={`${project.name} logo`}
            />
          </div>

          <h2 className="project__title" id="project-title">
            {project.name}
          </h2>

          {skillGroups.length > 0 && (
            <div className="project__skill-groups">
              {skillGroups.map((group) => (
                <div className="project__skill-group" key={group.title}>
                  <h3 className="project__skill-title">{group.title}</h3>
                  <ul className="project__skills" aria-label={group.title}>
                    {group.skill.map((skill) => (
                      <li className="project__skill" key={skill.name}>
                        {renderIcon(skill.icon)}
                        <span>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right column */}
        <div className="project__content">
          <div className="project__grid">
            {sections.map(({ heading, body }) => (
              <article className="project__col" key={heading}>
                <h3 className="project__heading">{heading}</h3>
                <p className="project__body">{body}</p>
              </article>
            ))}
          </div>

          <div className="image-crousel-view">
            <div className="image-crousel-track" ref={trackRef}>
              {carouselImages.map((image, index) => (
                <div className="image-crousel" key={index}>
                  <img
                    src={image}
                    alt={`${project.name} ${index + 2}`}
                    className="image-crousel-once"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}