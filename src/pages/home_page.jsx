import React from 'react';
import { Link } from 'react-router-dom';

import casaCentral from '../assets/casacentral.jpg';
import sanJoaquin from '../assets/sanjoaquin.jpg';

export const HomePage = () => {
  return (
    <>
      {/* Sección Hero */}
      <section className="hero">
        <div className="hero-overlay text-dark">
          <h1 className="display-5 fw-bold">Dirección de relaciones estudiantiles</h1>
          <p className="lead">Accede a los distintos servicios de la universidad</p>
        </div>
      </section>

      <br /><br />

      <div className="container">
        {/* Sección Servicios */}
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="card d-flex flex-row">
              <img className="card-img-custom img-fluid" src={casaCentral} alt="Casa Central" style={{ maxWidth: '50%' }} />
              <div className="card-body">
                <h2 className="card-title">Accede a los distintos servicios que la universidad tiene para ofrecer.</h2>
                <Link to="/servicios" className="btn btn-primary">Servicios</Link>
                <blockquote></blockquote>
                <figcaption className="blockquote-footer">
                  Infórmate aquí
                </figcaption>
              </div>
            </div>
          </div>
        </div>

        {/* Sección Beneficios */}
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="card d-flex flex-row">
              <div className="card-body">
                <h2 className="card-title">Postula a los distintos beneficios estudiantiles.</h2>
                <Link to="/beneficios" className="btn btn-primary">Postular</Link>
                <blockquote></blockquote>
                <figcaption className="blockquote-footer">
                  Postula aquí
                </figcaption>
              </div>
              <img className="card-img-custom img-fluid" src={sanJoaquin} alt="Campus San Joaquín" style={{ maxWidth: '50%' }} />
            </div>
          </div>
        </div>

        {/* Información importante */}
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3>Información importante para el estudiante</h3>
              <Link to="/informacion" className="btn btn-primary btn-sm">Ver todo</Link>
            </div>
            <ul className="list-group">
              <a href="https://rree.usm.cl/info/proceso-extraordinario-de-renovacion-de-fondo-solidario-credito-universitario-mineduc-2025/" className="list-group-item list-group-item-action" target="_blank" rel="noopener noreferrer">
                Proceso extraordinario de renovación de Fondo Solidario Crédito Universitario MINEDUC 2025
              </a>
              <a href="https://rree.usm.cl/info/evaluacion-socioeconomica-mineduc-2025-para-postulantes-a-fuas-en-segundo-proceso-febrero-marzo/" className="list-group-item list-group-item-action" target="_blank" rel="noopener noreferrer">
                Evaluación socioeconómica MINEDUC 2025 para postulantes a FUAS en segundo proceso (febrero-marzo)
              </a>
              <a href="https://rree.usm.cl/info/suspension-de-beneficios-mineduc-gratuidad-becas-y-fscu-2025/" className="list-group-item list-group-item-action" target="_blank" rel="noopener noreferrer">
                Suspensión de Beneficios MINEDUC (Gratuidad, Becas y FSCU) 2025
              </a>
            </ul>
          </div>
        </div>

        {/* Noticias */}
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3>Noticias</h3>
              <Link to="/noticias" className="btn btn-primary btn-sm">Ver todo</Link>
            </div>
            <div className="card mb-2">
              <div className="card-body">
                <h5 className="card-title">
                  <a href="https://rree.usm.cl/noticias/iniciativa-estudiantil-ofrecera-instalaciones-electricas-gratuitas-en-zonas-vulnerables/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    Iniciativa estudiantil ofrecerá instalaciones eléctricas gratuitas en zonas vulnerables
                  </a>
                </h5>
                <p className="card-text">Estudiantes de Ingeniería Civil Eléctrica de la Universidad Técnica Federico Santa María impulsan el proyecto In Solem, que combina formación práctica entre alumnos y servicio comunitario.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <a href="https://rree.usm.cl/noticias/casa-de-estudios-inaugura-nuevo-espacio-sansano/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    Casa de estudios inaugura Nuevo Espacio Sansano
                  </a>
                </h5>
                <p className="card-text">Este moderno comedor busca mejorar la calidad de vida de la comunidad universitaria, promoviendo la inclusión, el bienestar y el sentido de pertenencia.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Eventos */}
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3>Eventos</h3>
              <Link to="/eventos" className="btn btn-primary btn-sm">Ver todo</Link>
            </div>
            <ul className="list-group">
              <Link to="/eventos/feria-bienestar" className="list-group-item list-group-item-action">
                 24 de junio: Colecta de sangre junio Campus Casa Central Valparaíso
              </Link>
              <Link to="/eventos/taller-vocacional" className="list-group-item list-group-item-action">
                 25 de junio: Colecta de sangre junio Campus Casa Central Valparaíso
              </Link>
              <Link to="/eventos/jornada-deportiva" className="list-group-item list-group-item-action">
                 30 de junio: Jornada deportiva interfacultades
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
