
import { PiReadCvLogoLight } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import sarahReseme from "./assets/Sarah_Ammaireh_2026.pdf"
import React, { useEffect, useState } from "react";


function Logo  ({ color = "currentColor", ...props })  {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 600"
      preserveAspectRatio="xMidYMid meet"
      fill={color}
      {...props}
    >
      <g transform="translate(0,600) scale(0.05,-0.05)">
        <path
          d="M3200 9466 c-1200 -176 -1959 -910 -1960 -1895 0 -398 93 -653 327 -896 381 -396 803 -543 2283 -795 1502 -255 2050 -550 2199 -1182 505 -2143 -3398 -2937 -4684 -952 -209 322 -281 585 -301 1094 l-14 370 -10 -310 c-14 -430 6 -1842 23 -1612 12 160 30 211 77 212 6 0 69 -46 140 -101 1196 -930 2590 -1145 3850 -594 1262 551 1669 2023 742 2684 -364 259 -732 376 -1742 550 -1247 214 -1529 286 -1914 486 -501 260 -719 608 -723 1155 -8 1220 1188 1949 2720 1659 909 -172 1462 -651 1759 -1524 101 -299 220 -1148 167 -1203 -9 -10 -138 17 -303 63 -174 49 -294 74 -305 63 -39 -37 44 -77 309 -149 359 -97 328 -45 311 -511 -15 -428 -3 -499 91 -565 143 -101 232 -4 407 444 132 335 138 346 186 334 293 -74 2249 -825 2307 -886 8 -8 119 -298 248 -645 128 -346 309 -832 403 -1080 372 -982 376 -1079 39 -1114 -269 -28 -66 -46 508 -46 588 0 770 18 496 49 -336 38 -437 170 -735 967 -97 261 -187 497 -199 524 -68 160 -440 1188 -433 1196 12 11 312 -128 928 -430 483 -238 563 -269 501 -194 -27 33 -679 363 -1208 610 l-280 132 -698 1868 c-825 2206 -727 1978 -850 1978 l-97 0 -282 -755 c-155 -415 -341 -926 -414 -1135 -252 -724 -317 -894 -342 -904 -14 -5 -132 25 -261 67 l-236 77 -15 249 c-83 1407 -803 2388 -1926 2622 -170 36 -901 52 -1089 25z m4908 -1279 c147 -394 431 -1153 630 -1685 200 -532 358 -972 353 -978 -6 -6 -36 1 -66 15 -113 53 -585 247 -885 363 -170 66 -341 132 -380 147 -152 60 -612 222 -840 296 -67 22 -89 39 -88 67 3 36 319 922 553 1548 278 743 380 1011 390 1028 18 30 53 -55 333 -801z m-1614 -1790 c113 -35 206 -70 206 -79 0 -88 -238 -613 -307 -676 -116 -107 -147 -16 -159 472 -10 404 -38 374 260 283z"
        />
      </g>
    </svg>
  );
};
export { Logo };

function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [isDark]);

  return { isDark, setIsDark };
}

 function ToggleControlledPreview() {
  const {isDark, setIsDark} = useTheme();


const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  setIsDark(e.target.checked);


  return (
    <div className="theme-toggle-wrap">
  <label className="theme-toggle">
    

    <input
      className="theme-toggle__input"
      type="checkbox"
      role="switch"
      checked={isDark}
      onChange={handleChange}
      aria-label="Toggle light / dark mode"
    />

    <span className="theme-toggle__track" aria-hidden="true">
      <span className="theme-toggle__thumb">
        {/* Sun (shown in light mode) */}
        <svg className="theme-toggle__icon theme-toggle__icon--sun" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
        {/* Moon (shown in dark mode) */}
        <svg className="theme-toggle__icon theme-toggle__icon--moon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>
    </span>
  </label>
</div>
  );
}

export default function NavBar() {
  const navigate = useNavigate();



  return (
    <div className="nav-bar">
      <nav className="nav-links">
        <div className="logo-contanier">
          <Logo
  className="logo-img"
  aria-label="Go to home page"
  role="link"
  tabIndex={0}
  onClick={() => navigate("/")}

/>

          <div className="logo-text">
            <p>Sarah Ammaireh / Portfolio</p>
          </div>
         
        </div>
       <div className="nav-links-container">
          <Link to="/about">About</Link>
            <ToggleControlledPreview/>
          <div className="explore-button">
          <button className="bottone1" style={{ display: "flex", alignItems: "center", justifyContent: "spaceBetween" }} onClick={() => window.open(sarahReseme, "_blank")}>
          <PiReadCvLogoLight style={{color: "#121413", marginRight:"12px"}} />
          Resume
        
        </button>
        </div>
        </div>
      </nav>
    </div>
  );
}






