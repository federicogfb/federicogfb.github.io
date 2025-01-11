import React from "react";
import "./Technologies.css"; // Import the CSS

const Technologies = () => {
  return (
    <section className="technologies-section">
      <h2>Tecnologias.</h2>
      <div className="technologies-table">
        {/* Languages */}
        <div className="technology-category">
          <h3 className="category-header">Lenguajes:</h3>
          <div className="category-grid">
            <div className="technology-item">
              <img src="https://www.svgrepo.com/show/376344/python.svg" alt="Python" />
              <p>Python</p>
            </div>
            <div className="technology-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript" />
              <p>JavaScript</p>
            </div>
            <div className="technology-item">
              <img src="https://static-00.iconduck.com/assets.00/c-sharp-c-icon-1822x2048-wuf3ijab.png" alt="C#" />
              <p>C#</p>
            </div>
          </div>
        </div>

        {/* Frameworks */}
        <div className="technology-category">
          <h3 className="category-header">OS:</h3>
          <div className="category-grid">
            <div className="technology-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/UbuntuCoF.svg/1024px-UbuntuCoF.svg.png" alt="Ubuntu" />
              <p>Ubuntu</p>
            </div>
            <div className="technology-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Manjaro-logo.svg/2048px-Manjaro-logo.svg.png" alt="Manjaro" />
              <p>Manjaro</p>
            </div>
            <div className="technology-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1024px-Windows_logo_-_2012.svg.png" alt="Windows" />
              <p>Windows</p>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="technology-category">
          <h3 className="category-header">Herramientas:</h3>
          <div className="category-grid">
            <div className="technology-item">
              <img src="https://www.svgrepo.com/show/331370/docker.svg" alt="Docker" />
              <p>Docker</p>
            </div>
            <div className="technology-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/2109px-Kubernetes_logo_without_workmark.svg.png" alt="Kubernetes" />
              <p>Kubernetes</p>
            </div>
            <div className="technology-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png" alt="Git" />
              <p>Git</p>
            </div>
            <div className="technology-item">
              <img src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/opentofu-l4b2bn69b2iclco6tlwmqi.png/opentofu-5zkoag156qwvsva00yo7nc.png?_a=DAJFJtWIZAAC" alt="Terraform" />
              <p>Terraform</p>
            </div>
            <div className="technology-item">
              <img src="https://www.svgrepo.com/show/333504/aws.svg" alt="AWS" />
              <p>AWS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
