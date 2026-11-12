import methaqLogo from "./assets/methaqLogo.png";
import atharLogo from "./assets/atharLogo.png";
import jipLogo from "./assets/jipLogo.png";
import traversalLogo from "./assets/traversalLogo.png";
import coffeeLogo from "./assets/coffeeLogo.png";
import wasabiLogo from "./assets/wasabiLogo.png";

import jip1 from "./assets/jip/jip1.png";
import jip3 from "./assets/jip/jip3.png";
import jip5 from "./assets/jip/jip5.png";
import jip6 from "./assets/jip/jip6.png";
import jipposter from "./assets/jipposter.png";

import athar1 from "./assets/athar/athar1.png";
import athar2 from "./assets/athar/athar2.png";
import athar3 from "./assets/athar/athar3.png";
import athar4 from "./assets/athar/athar4.png";
import athar5 from "./assets/athar/athar5.png";
import atharposter from "./assets/atharposter.png";

import methaq1 from "./assets/methaq/methaq1.svg";
import methaq2 from "./assets/methaq/methaq2.svg";
import methaq3 from "./assets/methaq/methaq3.svg";
import methaq4 from "./assets/methaq/methaq4.svg";
import methaq6 from "./assets/methaq/methaq6.svg";
import methaq7 from "./assets/methaq/methaq7.png";
import methaq8 from "./assets/methaq/methaq8.svg";
import methaqposter from "./assets/methaqposter.png";

import coffee1 from "./assets/coffee/coffee1.png";
import coffee2 from "./assets/coffee/coffee2.png";
import coffee3 from "./assets/coffee/coffee3.png";
import coffee4 from "./assets/coffee/coffee4.png";
import coffee5 from "./assets/coffee/coffee5.png";
import coffee6 from "./assets/coffee/coffee6.png";
import coffeeposter from "./assets/coffeeposter.png"

import wasabi1 from "./assets/wasabi/wasabi1.png";
import wasabi2 from "./assets/wasabi/wasabi2.png";
import wasabi3 from "./assets/wasabi/wasabi3.png";
import wasabi4 from "./assets/wasabi/wasabi4.png";
import wasabi5 from "./assets/wasabi/wasabi5.png";
import wasabiposter from "./assets/wasabiposter.png";

import traversal1 from "./assets/traversal/traversal1.png";
import traversal2 from "./assets/traversal/traversal2.png";
import traversal3 from "./assets/traversal/traversal3.png";
import traversal4 from "./assets/traversal/traversal4.png";
import traversal5 from "./assets/traversal/traversal5.png";
import traversal6 from "./assets/traversal/traversal6.png";
import traversalshow from "./assets/traversalposter.png";


import { FaReact } from "react-icons/fa";
import { RiImageCircleAiLine } from "react-icons/ri";
import { TbApi, TbBrandFlutter } from "react-icons/tb";
import { MdOutlineTranslate } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { TiFlowChildren } from "react-icons/ti";
import { FaFigma } from "react-icons/fa";
import { GrBusinessService } from "react-icons/gr";
import { LuUserCheck, LuUserSearch } from "react-icons/lu";
import { GrGraphQl } from "react-icons/gr";
import {  PiDevicesLight} from "react-icons/pi";
import { LiaGit } from "react-icons/lia";
import { IoEarthOutline } from "react-icons/io5";

export const ProjectData = [

  
  {
    id: 1,
    name: "Jordan Infrastrucre Palne - JIP",
    imageLogo: jipLogo,
    alt: "",
    role: ["Frontend-","UI/UX Design"],
    image: [jipposter,jip1, jip3, jip5, jip6],
    description:
      "JIP is a web platform that fixes this communication gap by showing exactly where their pipes and cables cross before anyone starts digging.",
    why:"To prevent accidental damage to underground utilities and bridge the communication gap between civil engineering teams before excavation begins",
    what:"A centralized web platform that acts as an accurate mapping tool for underground infrastructure networks.",
   how:"By ingesting and dynamically rendering multi-layer GIS datasets into a centralized platform, enabling real-time spatial queries and subsurface clash detection prior to excavation.",
      skills: [
  {
    title: "Tools & Frameworks",
    skill: [
      { icon: <FaReact />, name: "React", i: "#56CCF2", j: "#2F80ED" },
      { icon: <LiaGit />, name: "Git & GitHub", i: "#80FF72", j: "#7EE8FA" }, // Maintained your original data
      { icon: <IoEarthOutline />, name: "GIS", i: "#66171D", j: "#992831" }
    ]
  },
],
    color: "#66171D",
    fontFamily: "ArchivoBlack-jip",
    src:"",
    
  },

  

  {
    id: 2,
    name: "Traversal-App",
    alt: "",
    role: ["Flutter"],
    imageLogo: traversalLogo,
    image: [traversalshow, traversal1, traversal2, traversal3, traversal4, traversal5, traversal6],
    description:
      "Traversal is a travel application designed to help users explore destinations around the world and discover new countries through a modern and user-friendly experience. The app was built using Flutter and the Dart programming language, with a strong focus on clean architecture, scalability, and performance.",
    why:"To inspire users to discover new countries and explore global destinations through a seamless, modern digital experience.",
    what:"A highly scalable, user-friendly mobile travel application focused on worldwide exploration.",
   how:"By leveraging Flutter and Dart with a clean architecture design to deliver a fast, responsive, and high-performance app interface.",
      skills:  [
  {
    title: "Tools & Frameworks",
    skill: [
      { icon: <TbBrandFlutter />, name: "Flutter", i: "#73c5e0", j: "#2F80ED" }
    ]
  },
  {
    title: "Concepts & Methods",
    skill: [
      { icon: <GrGraphQl />, name: "State management", i: "#52591F", j: "#7D8735" },
      { icon: <MdOutlineTranslate />, name: "Localization", i: "#52591F", j: "#7D8735" }
    ]
  },
  {
    title: "Integrations & Features",
    skill: [
      { icon: <TbApi />, name: "Rest API", i: "#f2a156", j: "#875113" },
      { icon: <GrMapLocation />, name: "Location service", i: "#52591F", j: "#7D8735" }
    ]
  }
],
    
    color: "#575e22",
    fontFamily: "Roboto-athar",
    src:"",
  },
  
{
    id: 3,
    name: "Wasabi Bliss-App",
    imageLogo: wasabiLogo,
    alt: "",
    role: ["UI/UX Design"],
    image: [ wasabiposter,wasabi1, wasabi2, wasabi3, wasabi4, wasabi5],
    description:"Wasabi Bliss is an easy-to-use mobile app that streamlines your Japanese food cravings. Ordering your favorite dishes with our app is fast and easy.",
    why:"To quickly and effortlessly satisfy users' cravings for Japanese cuisine.",
    what:"A streamlined and user-friendly mobile food ordering application specifically dedicated to Japanese food.",
   how:"By providing a fast, easy-to-navigate interface that allows users to browse their favorite dishes and place food orders seamlessly from their phones.",
    skills: [
  {
    title: "Tools & Frameworks",
    skill: [
      { icon: <FaFigma />, name: "figma", i: "#3B666B", j: "#5C8E94" }
    ]
  },
  {
    title: "Concepts & Methods",
    skill: [
      { icon: <PiDevicesLight />, name: "responsive screen", i: "#55392C", j: "#825A47" }
    ]
  }
],
    color: "#55392C",
    fontFamily: "Kalam-wasabi",
    src:"",
  },
  
{
    id: 4,
    name: "Methaq-App",
    imageLogo: methaqLogo,
    alt: "",
    role: ["UX/UI Design-","Flutter Development"],
    image: [methaqposter,methaq1,methaq2,methaq3,methaq4,methaq6,methaq7, methaq8],
    description:
      "An educational platform designed to build student values and skills through interactive daily tasks.",
    why:"To build and reinforce positive values and essential skills in students through consistent, engaging methods.",
    what:"An interactive educational platform tailored for continuous student development and daily learning.",
how: "Developed as a cross-platform mobile app using Flutter and Dart, implementing role-based access, state-driven daily task tracking, and a custom UI.",      skills:[
  {
    title: "Tools & Frameworks",
    skill: [
      { icon: <FaFigma />, name: "figma", i: "#3B666B", j: "#5C8E94" },
      { icon: <TbBrandFlutter />, name: "Flutter", i: "#56CCF2", j: "#2F80ED" }
    ]
  },
  {
    title: "Concepts & Methods",
    skill: [
      { icon: <TiFlowChildren />, name: "User Flow", i: "#223E42", j: "#3B666B" }
    ]
  }
],
    color: "#3B666B",
    fontFamily: "VarelaRound-Regular-methaq",
    src:"",
  },
  

  
 
{
    id: 5,
    name: "Athar-website",
    alt: "",
    role: ["UX/UI Design"],
    imageLogo: atharLogo,
    image: [atharposter,athar1, athar2, athar3, athar4, athar5],
    description:` ATHAR, 
Aims to establish a "Circular Economy" for clothing in Jordan, thereby reducing textile waste. We made a website for selling gently used clothes and set up containers for collecting old fabrics. We recycle damaged items into wall insulation for buildings. This project encourages people to get involved in environmental efforts through rewards and charitable support. 
    `,
    why:'ATHAR aims to reduce textile waste in Jordan by building a circular economy for clothing. It motivates the community to join these environmental efforts through rewards and charitable support.'
    ,
    what : "The project is a textile management initiative that gives old clothes a second life. It functions as both an online marketplace for wearable items and a recycling program for damaged fabrics.",
    how: "The team collects old garments using dedicated physical containers. They resell the gently used clothes on a custom website and repurpose the unwearable fabrics into wall insulation for buildings.",
    skills:[
  {
    title: "Tools & Frameworks",
    skill: [
      { icon: <FaFigma />, name: "Figma", i: "#56CCF2", j: "#2F80ED" }
    ]
  },
  {
    title: "Concepts & Methods",
    skill: [
      { icon: <GrBusinessService />, name: "business model", i: "#124C74", j: "#2270A8" },
      { icon: <LuUserSearch />, name: "user research", i: "#124C74", j: "#3A7C85" },
      { icon: <LuUserCheck />, name: "user testing", i: "#0B2C44", j: "#124C74" }
    ]
  }
],
    color: "#2270A8",
    fontFamily: "Roboto-athar",
    src:"",
  },
{
    id: 6,
    name: "coffee website",
    alt: "",
    role: ["UI/UX Design"],
    imageLogo: coffeeLogo,
    image: [coffeeposter,coffee1,coffee2,coffee3,coffee4,coffee5, coffee6],
    description:
      "coffe shop menu website that allows users to view the menu, place orders, and make payments online. The website was built using React and Node.js, with a focus on responsive design and user experience.",
    why:"To provide customers with a convenient, frictionless way to view offerings and purchase coffee without waiting in line.",
    what:"A responsive, user-centric coffee shop website with full e-commerce capabilities.",
   how:"By designing a clean, mobile-first visual layout where users can easily browse the menu across any device and jump straight to checkout.",
      skills: [
  {
    title: "Tools & Frameworks",
    skill: [
      { icon: <FaFigma />, name: "figma", i: "#3B666B", j: "#5C8E94" }
    ]
  },
  {
    title: "Concepts & Methods",
    skill: [
      { icon: <PiDevicesLight />, name: "responsive screen", i: "#55392C", j: "#825A47" }
    ]
  },
  {
    title: "Integrations & Features",
    skill: [
      { icon: <RiImageCircleAiLine />, name: "create image with Ai", i: "#55392C", j: "#7C4633" }
    ]
  }
],
    color: "#5c3d2f",
    fontFamily: "Cormorant Garamond",
    src:"",
  },
 
];
