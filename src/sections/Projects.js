import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Craftech Academy 21.",
    description: "Contenerizar, crear pipelines de CI/CD que finalizan en deploy a minikube. La contenerizacion se trabaja sobre un servicio que consiste en frontend y backend, el cual hay que optimizar para que funcione.",
    link: "https://github.com/federicogfb/craftech-academy-final-2021"
  },
  {
    title: "Simulacion Laboral de No-Country.",
    description: "Simulacion Laboral en la cual asumo el rol de DevOps, con el objetivo de mediante automaticaciones, facilitar a mis programadores un entorno de trabajo sin distracciones.",
    link: "https://github.com/your-repo/project2"
  },
  {
    title: "Ejercicios: Terraform Up and Running.",
    description: "Resolucion de ejercicios del libro Terraform Up un Running. Trabaja sobre la free tier de AWS, enseñando teoria para aplicarla en ejercicios practicos, siempre manteniendo las mejores practicas de terraform.",
    link: "https://github.com/federicogfb/terraform-practice"
  },
  {
    title: "Este Portfolio.",
    description: "Diseño de una pagina web estatica la cual es contenerizada en Docker y alojada en Github. Se crearan pipelines de CI/CD para que al ser aprobada la PR integren los cambios automaticamente y sean descargados al servicio de hosting.",
    link: "https://github.com/your-repo/project4"
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Mis Proyectos.</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => window.open(project.link, "_blank")}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
