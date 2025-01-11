import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        {/* Left Column: Contact Info */}
        <div className="footer-column">
          <h4>Info de contacto:</h4>
          <p>📱 +54(3775)400693</p>
          <p>📧 federicofernandezcontacto@gmail.com</p>
        </div>

        {/* Center Column: Social Links */}
        <div className="footer-column">
          <h4>Redes sociales:</h4>
          <div className="social-links">
            <a href="https://github.com/federicogfb" target="_blank" rel="noopener noreferrer">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png" alt="GitHub" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/fernandezbarriosfederico/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="LinkedIn" className="social-icon" />
            </a>
          </div>
        </div>

        {/* Right Column: CV Download */}
        <div className="footer-column">
          <h4>Ojea mi CV:</h4>
          <a href="./cv_federicofernandez_ingles.pdf" download="cv_federicofernandez.pdf" className="download-button">
            Descargar
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
