import "./projectInfo.css";
import { isValidElement, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectData } from "./projectData.tsx";
import { useCallback, useState } from "react";

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




// inside your component
const trackRef = useRef<HTMLDivElement>(null);
const dragRef = useRef({ active: false, startX: 0, startScroll: 0 });
const [activeIndex, setActiveIndex] = useState(0);
const [canPrev, setCanPrev] = useState(false);
const [canNext, setCanNext] = useState(true);
const [dragging, setDragging] = useState(false);

const updateState = useCallback(() => {
  const track = trackRef.current;
  if (!track) return;

  const slides = Array.from(track.children) as HTMLElement[];
  const left = track.scrollLeft;

  // the slide whose left edge is closest to the scroll position is "active"
  let closest = 0;
  let min = Infinity;
  slides.forEach((slide, i) => {
    const distance = Math.abs(slide.offsetLeft - left);
    if (distance < min) {
      min = distance;
      closest = i;
    }
  });

  const atStart = left <= 1;
  const atEnd = left + track.clientWidth >= track.scrollWidth - 1;

  setActiveIndex(atEnd ? slides.length - 1 : atStart ? 0 : closest);
  setCanPrev(!atStart);
  setCanNext(!atEnd);
}, []);

useEffect(() => {
  const track = trackRef.current;
  if (!track) return;

  let raf = 0;
  const onScroll = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(updateState);
  };

  updateState();
  track.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  // Recalculate when slides get their size (images finishing loading)
  const ro = new ResizeObserver(onScroll);
  ro.observe(track);
  Array.from(track.children).forEach((slide) => ro.observe(slide));


  return () => {
    cancelAnimationFrame(raf);
    track.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    ro.disconnect();
  };
}, [updateState, carouselImages.length]);

const scrollToIndex = (index: number) => {
  const track = trackRef.current;
  if (!track) return;
  const slides = Array.from(track.children) as HTMLElement[];
  const target = slides[Math.max(0, Math.min(index, slides.length - 1))];
  track.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
};

const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === "ArrowRight") {
    e.preventDefault();
    scrollToIndex(activeIndex + 1);
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    scrollToIndex(activeIndex - 1);
  }
};

// mouse drag (touch already scrolls natively)
const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
  if (e.pointerType !== "mouse") return;
  const track = trackRef.current!;
  dragRef.current = { active: true, startX: e.clientX, startScroll: track.scrollLeft };
  setDragging(true);
  track.setPointerCapture(e.pointerId);
};

const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
  if (!dragRef.current.active) return;
  const track = trackRef.current!;
  track.scrollLeft = dragRef.current.startScroll - (e.clientX - dragRef.current.startX);
};

const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
  if (!dragRef.current.active) return;
  dragRef.current.active = false;
  setDragging(false); // snapping kicks back in and settles on the nearest slide
  trackRef.current?.releasePointerCapture(e.pointerId);
};






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
  <button
    type="button"
    className="image-crousel-btn image-crousel-btn--prev"
    onClick={() => scrollToIndex(activeIndex - 1)}
    disabled={!canPrev}
    aria-label="Previous image"
  >
    ‹
  </button>

  <div
    className={`image-crousel-track${dragging ? " is-dragging" : ""}`}
    ref={trackRef}
    tabIndex={0}
    role="region"
    aria-roledescription="carousel"
    aria-label={`${project.name} images`}
    onKeyDown={handleKeyDown}
    onPointerDown={onPointerDown}
    onPointerMove={onPointerMove}
    onPointerUp={endDrag}
    onPointerCancel={endDrag}
  >
    {carouselImages.map((image, index) => (
      <div
        className="image-crousel"
        key={index}
        role="group"
        aria-roledescription="slide"
        aria-label={`${index + 1} of ${carouselImages.length}`}
      >
        <img
          src={image}
          alt={`${project.name} ${index + 2}`}
          className="image-crousel-once"
          draggable={false}
        />
      </div>
    ))}
  </div>

  <button
    type="button"
    className="image-crousel-btn image-crousel-btn--next"
    onClick={() => scrollToIndex(activeIndex + 1)}
    disabled={!canNext}
    aria-label="Next image"
  >
    ›
  </button>

  <div className="image-crousel-dots">
    {carouselImages.map((_, i) => (
      <button
        key={i}
        type="button"
        className={`image-crousel-dot${i === activeIndex ? " is-active" : ""}`}
        onClick={() => scrollToIndex(i)}
        aria-label={`Go to image ${i + 1}`}
        aria-current={i === activeIndex}
      />
    ))}
  </div>
</div>
        </div>
      </div>
    </section>
  );
}