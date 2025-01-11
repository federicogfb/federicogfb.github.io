// src/components/Navbar.js
import React from "react";
import { Link } from "react-scroll";
import Button from "./Button/Button"; // Adjust path to point to the correct folder
import { ButtonThemes, ButtonTypes, ButtonSizes } from "./Button/buttonTypes"; // Optional import for button types
import { IconType } from "./Button/IconTypes";   // Optional import for icons
import "../styles/Navbar.css";
import "./Button/button.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="about-me" smooth={true} duration={500}>
        <Button
          size="medium"
          label="About Me"
          type="secondary"
          onClickHandler={() => console.log("Navigating to About Me")}
        />
      </Link>

      <Link to="projects" smooth={true} duration={500}>
        <Button
          size="medium"
          label="Proyectos"
          type="secondary"
          onClickHandler={() => console.log("Navigating to Projects")}
        />
      </Link>

      <Link to="academic-history-section" smooth={true} duration={500}>
        <Button
          size="medium"
          label="Historia Academica"
          type="secondary"
          onClickHandler={() => console.log("Navigating to Academic History")}
        />
      </Link>

      <Link to="technologies-section" smooth={true} duration={500}>
        <Button
          size="medium"
          label="Tecnologias"
          type="secondary"
          onClickHandler={() => console.log("Navigating to Technologies")}
        />
      </Link>

      <Link to="footer" smooth={true} duration={500}>
        <Button
          size="medium"
          label="Contacto"
          type="secondary"
          onClickHandler={() => console.log("Navigating to Contact")}
        />
      </Link>
    </nav>
  );
}

export default Navbar;
