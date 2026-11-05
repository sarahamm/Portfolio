import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Contact from "./Contact.tsx";
import NavBar from "./navbar.tsx";
import "./fonts.css";
import myLogo from "./assets/myLogo.svg";
import Gallery from "./Gallery.tsx";
import { FiArrowDownRight } from "react-icons/fi";
import { BrowserRouter} from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

export default function main() {
  return (
    <>
      <section id="center">
        <div className="moving-background-container">
          <div className="pattern-layer">
            <img src={myLogo} alt="Logo" className="logo-hero" />
          </div>
          <div
            style={{
              position: "relative",
              zIndex: 1,
              paddingBottom: "10px",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <NavBar />



            <div className="hero-text-title">
              <h1>
                Thoughtful by design. <br />
                Purposeful by nature.
              </h1>
              <p className="hero-text">
                Designing and developing digital experiences with clarity,
                curiosity, and care.{" "}
              </p>
              <p className="hero-position">
                Front-end . UI/UX Designer . Mobile Developer{" "}
              </p>
            </div>

            <div className="explore-button" style={{padding:"0 40px"}}>
              <button className="bottone1">
                <p className="btn-txt">Explore My Work</p>
                <FiArrowDownRight />
              </button>
              <p style={{ fontSize: "16px" }}>Selected projects — 2026</p>
            </div>
          </div>
        </div>
      </section>


      <Gallery />
      <Contact />
    </>
  );
}

// dark mode: https://freefrontend.com/css-rolling-effect/     Rollback Ball 3D Togg
