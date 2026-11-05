import React, { useEffect, useRef } from "react";
import "./project.css";
import { ProjectData } from "./projectData.tsx";
import NavBar from "./navbar.tsx";

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (trackRef.current) {
      // Prevent default vertical page scroll when hovering over the carousel
      e.preventDefault();
      // Translate vertical scroll delta into horizontal scroll position
      trackRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // Only convert wheel to horizontal scroll on desktop
      if (!window.matchMedia("(min-width: 1025px)").matches) return;
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="projects-wrapper">
      <NavBar />
      {ProjectData.map((project) => {
        return (
          <div
            className="project-card"
            style={{ "--project-color": project.color } as React.CSSProperties}
            key={project.id}
          >
            <div className="project-upper-level">
              <div className="project-upper-level-left">
                <div className="project_image-div">
                  <img
                    src={project.imageLogo}
                    alt={project.alt}
                    className="project_image"
                  />
                </div>
                
                <div className="project-txt">
                <div className="project-text-title">
                  <p>{project.name}</p>
                </div>
                <div className="project-text-description">
                  <p>{project.description}</p>
                </div>
</div>
                <div className="project-skill">
                  <p className="project-text-skill">Skills</p>
                  <div className="project-skill-list">
                    <ul>
                      {project.skills.map((skill) => (
                        <div>
                          <li
                            style={
                              {
                                "--i": skill.i,
                                "--j": skill.j,
                              } as React.CSSProperties
                            }
                          >
                            <span className="icon">{skill.icon}</span>
                            <span className="title">{skill.name}</span>
                          </li>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="project-text">
                <div className="image-crousel-view">
                  <div
                    className="image-crousel-track"
                    ref={trackRef}
                    onWheel={handleWheel}
                  >
                    {project.image.map((image, index) => {
                      return (
                        <div className="image-crousel" key={index}>
                          <img
                            src={image}
                            alt={`${project.name} ${index + 1}`}
                            className="image-crousel-once"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

//add https://animate-ui.com/docs/components/backgrounds/bubble to each project section
