import React, { useEffect } from "react";
import "./TechnologiesMarquee.css"; // Import the CSS styles
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

const TechnologiesMarquee = () => {
  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );
    const marqueeContent = document.querySelector(".marquee-content");

    root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, []);

  return (
    <div className="marquee">
      <ul className="marquee-content">
        <li><FontAwesomeIcon icon={['fab', 'github']} /></li>
        <li><FontAwesomeIcon icon={['fab', 'codepen']} /></li>
        <li><FontAwesomeIcon icon={['fab', 'free-code-camp']} /></li>
        <li><FontAwesomeIcon icon={['fab', 'dev']} /></li>
        <li><FontAwesomeIcon icon={['fab', 'react']} /></li>
        <li><FontAwesomeIcon icon={['fab', 'vuejs']} /></li>
        <li><FontAwesomeIcon icon={['fab', 'angular']} /></li>
        <li><FontAwesomeIcon icon={['fab', 'node']} /></li>
        <li><FontAwesomeIcon icon={['fab', 'wordpress']} /></li>
        <li><FontAwesomeIcon icon={['fab', 'aws']} /></li>
        <li><FontAwesomeIcon icon={['fab', 'docker']} /></li>
        <li><FontAwesomeIcon icon={['fab', 'android']} /></li>
      </ul>
    </div>
  );
};

export default TechnologiesMarquee;
