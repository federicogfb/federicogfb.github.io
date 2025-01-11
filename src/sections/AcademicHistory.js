import React from "react";
import "./AcademicHistory.css"; // Import the CSS file for styling

const AcademicHistory = () => {
  return (
    <section className="academic-history-section">
      <h2>
        Historia Academica.
      </h2>

      <div className="timeline">
        {/* Timeline Event 1 */}
        <div className="timeline__event animated fadeInUp delay-3s timeline__event--type1">
          <div className="timeline__event__icon">
            <i className="lni-cake"></i>
            <div className="timeline__event__date">2021 - 2023</div>
          </div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">Desarrollo de Software.</div>
            <div className="timeline__event__description">
              <p>
                Durante 3 años estudio una Tecnicatura en Desarrollo de Software en el ISFD Ramon J. Carcano. Alli aprendo las bases de la programacion con Python y luego profundizo con C#. En tercer año dejo la carrera debido a que no estaba contento con el contenido academico ofrecido.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Event 2 */}
        <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
          <div className="timeline__event__icon">
            <i className="lni-burger"></i>
            <div className="timeline__event__date">2023 - 2024</div>
          </div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">Introduccion a DevOps.</div>
            <div className="timeline__event__description">
              <p>
                Paso un año estudiando de manera autodidacta con distintos cursos gratuitos. Empiezo a formarme como DevOps con los cursos de la Craftech Academy 2021. Aprendo sobre Docker, Kubernetes y un poco de AWS. Luego, por mi cuenta, estudio Terraform del libro "Terraform Up and Running". 
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Event 3 */}
        <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
          <div className="timeline__event__icon">
            <i className="lni-slim"></i>
            <div className="timeline__event__date">2024 - 2025</div>
          </div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">Diplo DevOps by Craftech.</div>
            <div className="timeline__event__description">
              <p>
                Empiezo, curso y finalizo la Diplomatura Diplo DevOps de Craftech en colaboracion con la UNC. Alli revisito conceptos de Infraestructura que vi en mi paso por el ISFD Carcano, Docker, Kubernetes e IaC. Tambien profundizamos mucho en AWS, como utilizarlo, las mejores practicas y comprender profundamente los servicios que proveen y como encontrar la mejor solucion.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Event 4 */}
        <div className="timeline__event animated fadeInUp timeline__event--type1 last-event">
          <div className="timeline__event__icon">
            <i className="lni-cake"></i>
            <div className="timeline__event__date">2025 - ...</div>
          </div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">Ingenieria en Computacion - UNC.</div>
            <div className="timeline__event__description">
              <p>
                Sigo buscando formarme profesionalmente. En 5 años voy a tener el titulo de ingeniero en mano :).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicHistory;