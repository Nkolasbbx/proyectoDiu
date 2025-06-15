import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import casaCentral from '../assets/casacentral.jpg';
import sanJoaquin from '../assets/sanjoaquin.jpg';

export const HomePage = () => {
  const [inscritos, setInscritos] = useState({});

  const handleInscripcion = (id) => {
    setInscritos((prev) => ({ ...prev, [id]: true }));
    alert('¡Inscripción realizada con éxito!');
  };

  const eventos = [
    {
      id: 'feria-bienestar',
      titulo: '24 de junio: Colecta de sangre junio Campus Casa Central Valparaíso',
      cuposDisponibles: 10,
    },
    {
      id: 'taller-vocacional',
      titulo: '25 de junio: Colecta de sangre junio Campus Casa Central Valparaíso',
      cuposDisponibles: 0,
    },
    {
      id: 'jornada-deportiva',
      titulo: '30 de junio: Jornada deportiva interfacultades',
      cuposDisponibles: 5,
    },
  ];

  return (
    <>
      {/* Migas de pan visuales (puedes quitar si estás en la página de inicio) */}
      <div className="bg-light py-2 border-bottom mb-3">
        <div className="container px-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-decoration-none text-primary">🏠 Inicio</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="hero-quienes-somos bg-light py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">Dirección de relaciones estudiantiles</h1>
          <p className="lead">Accede a los distintos servicios de la universidad.</p>
        </div>
      </section>

      <div className="container my-5">
        {/* Beneficios */}
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="card d-flex flex-row">
              <div className="card-body">
                <h2 className="card-title">Postula a los distintos beneficios estudiantiles.</h2>
                <Link to="/beneficios" className="btn btn-primary">Postular</Link>
                <figcaption className="blockquote-footer mt-2">
                  Postula aquí
                </figcaption>
              </div>
              <img className="card-img-custom img-fluid" src={sanJoaquin} alt="Campus San Joaquín" style={{ maxWidth: '50%' }} />
            </div>
          </div>
        </div>

        {/* Información importante */}
        <div className="card mb-5">
          <div className="card-body">
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

        {/* Noticias y Eventos */}
        <div className="row">
          {/* Noticias */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
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
                    <p className="card-text">
                      Estudiantes de Ingeniería Civil Eléctrica impulsan el proyecto In Solem, que combina formación práctica y servicio comunitario.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="https://rree.usm.cl/noticias/casa-de-estudios-inaugura-nuevo-espacio-sansano/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        Casa de estudios inaugura Nuevo Espacio Sansano
                      </a>
                    </h5>
                    <p className="card-text">
                      Un comedor moderno para mejorar la calidad de vida de la comunidad universitaria, promoviendo inclusión y bienestar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Eventos */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3>Eventos</h3>
                  <Link to="/eventos" className="btn btn-primary btn-sm">Ver todo</Link>
                </div>
                <ul className="list-group">
                  {eventos.map((evento) => (
                    <li key={evento.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <Link to={`/eventos/${evento.id}`} className="text-decoration-none">
                        {evento.titulo}
                      </Link>
                      <button
                        className={`btn btn-sm ms-2 ${evento.cuposDisponibles === 0 ? 'btn-danger' : 'btn-outline-success'}`}
                        onClick={() => handleInscripcion(evento.id)}
                        disabled={inscritos[evento.id] || evento.cuposDisponibles === 0}
                      >
                        {evento.cuposDisponibles === 0
                          ? 'Sin cupos'
                          : inscritos[evento.id]
                          ? 'Inscrito'
                          : 'Inscribirse'}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
