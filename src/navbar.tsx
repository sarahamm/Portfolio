
import { PiReadCvLogoLight } from "react-icons/pi";
import myLogo from "./assets/myLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import sarahReseme from "./assets/Sarah_Ammaireh_2026.pdf"

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="nav-bar">
      <nav className="nav-links">
        <div className="logo-contanier">
          <img src={myLogo} alt="Logo" className="logo-img" 
            onClick={() => navigate("/")} 
            />

          <div className="logo-text">
            <p>Sarah Ammaireh / Portfolio</p>
          </div>
         
        </div>
       <div className="nav-links-container">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <div className="explore-button">
          <button className="bottone1" style={{ display: "flex", alignItems: "center", justifyContent: "spaceBetween" }} onClick={() => window.open(sarahReseme, "_blank")}>
          <PiReadCvLogoLight style={{color: "#161616", marginRight:"12px"}} />
          Resume
        
        </button>
        </div>
        </div>
      </nav>
    </div>
  );
}
