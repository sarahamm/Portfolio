import NavBar from "./navbar";
import "./about.css"
import myLogo from "./assets/myLogo.svg";
import sarahReseme from "./assets/Sarah_Ammaireh_2026.pdf"
import "./App.css"
import { PiReadCvLogoLight } from "react-icons/pi";

const education = [
  ["Albalqaa Applied University-Computer Science", "2022 - 2026"],
];

const certifications = [
  ["My Community Project", "European Union", "60 Training Hours - 2025"],
  ["Meta Front-End Developer", "Meta, Coursera", "2024 - p"],
];

const experience = [
  ["ProgressSoft Corporation", "Mobile Developer Intern", "July 2025 - September 2025", "Amman, Jordan"]
];

const volunteering =[
  ["Social Media team Lead "," IEEE computer society",],
  ["Media team member "," coding club  "],
];

const skills = [
  [
    "Front-End Development",
    "Cross-Platform Mobile Development",
    "UI/UX Layout Design",
    "Interactive Prototyping",
    "State Management",
    "REST API Integration",
    "Clean Code Architecture",
    "Arabic Typography & Calligraphy",
    "Digital Graphic Design"
  ],
  [
    "React",
    "Flutter",
    "Dart",
    "JavaScript",
    "Python",
    "HTML5",
    "CSS3",
    "Git",
    "React Router"
  ],
  [
    "Figma",
      ]
];

const awards = [
  ["2nd Place at the National Technology Parade (NTP) 2026 in public safty and quality of life category", "Summer 2026"],
  ["2nd Place in the Project2Market competition in the software development category ", "Fall 2024 "],
];

type ColumnProps = {
  title: string;
  groups: string[][];
};



function Column({ title, groups }: ColumnProps) {
  return (
    <section className="resume__col">
      <h2 className="resume__heading">{title}</h2>
      {groups.map((lines, i) => (
        <div className="resume__group" key={i}>
          {lines.map((line) => (
            <p className="resume__line" key={line}>
              {line}
            </p>
          ))}
        </div>
      ))}
    </section>
  );
}

function About() {
  return (
    <section className="about">
      <div className="about__text">
        <h1 className="about__title">Hey, I’m Sarah Ammaireh.</h1>
        <p>
          I care about creating thoughtfully crafted software. 
          I believe the unseen effort and clean architecture behind a product are just as important as its outward appearance.
        </p>
        <p>I am currently seeking my next opportunity as a Junior Front-End, UI/UX Designer, or Mobile Developer.</p>
        <p>
          Previously, I designed and developed the Jordan Infrastructure Platform (JIP), a B2G web application built to streamline civil engineering workflows. This included UI/UX layout design, responsive front-end components, and accessible interfaces.
        </p>
        <p>
          Before that, I helped design and build Methaq, an educational mobile application featuring custom geometric visual styling and tailored user experiences.
        </p>
       <p>I’d love to hear from you!  
        <a href="mailto:sarahammaireh@gmail.com">
           sarahammaireh@gmail.com
        </a>
      </p>

      <div className="explore-button">
        <button className="bottone1" style={{ display: "flex", alignItems: "center", justifyContent: "spaceBetween" }} onClick={() => window.open(sarahReseme, "_blank")}>
          <PiReadCvLogoLight style={{color: "#161616", marginRight:"12px"}} />
          Resume
        
        </button>
        </div>
      </div>
      <img
        className="about__photo"
        src={myLogo}
        alt="Maggie shaping a wooden piece on a lathe, wearing safety glasses and overalls"
      />
    </section>
  );
}

 export default function AboutMe(){
   return (
<>
    <NavBar />
    <main className="resume">
       <About/>
      <div className="resume__grid">
        <div className="resume__col resume__col--intro">
        <Column title="Education" groups={education} />
        <Column title="Certifications" groups={certifications} />
        </div>
        <div className="resume__col resume__col--intro">
        <Column title="Experience" groups={experience} />
        <Column title="Volunteering" groups={volunteering} />
        </div>
        <Column title="Skills" groups={skills} />
        <Column title="Awards" groups={awards} />
      </div>
    </main>
    </>
   );


    

}







