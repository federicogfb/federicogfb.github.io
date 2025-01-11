// src/sections/AboutMe.js
import React from "react";
import "./AboutMe.css";
import presentacion from "./presentacion.png";

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me-section">
      <div className="about-me-content">
        <img 
          src={presentacion}
          alt="Cover Letter" 
          className="about-me-cover-image"
        />
        <p className="about-text">
        Cuando, estudiando desarrollo de software, descubrí que mediante código se puede interactuar con infraestructura, me quede maravillado. Era el punto de encuentro entre mi pasión por la computación que tenia de pequeño y mis deseos de convertirme en programador de adulto. Ese día hubo un cambio en mi. Desde ese día me convertí en DevOps.
        Confío plenamente en mis capacidades, y soy capaz de afrontar cualquier desafío.
        Yo soy tu ingeniero DevOps.
        </p>
      </div>
    </section>
  );
};


export default AboutMe;
