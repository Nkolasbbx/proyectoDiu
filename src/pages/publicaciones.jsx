import React from 'react';
import { Link } from 'react-router-dom';

export const PublicacionesPage = () => {
  const publicaciones = [
    { titulo: 'Memoria Institucional 2023', url: 'https://www.universidad.cl/noticias/biblioteca-campus-sur' },
    { titulo: 'Reglamento Institucional de Derechos, Deberes y Disciplina del Estudiantado (Decreto de Rectoría N° 056/2024)', url: 'https://www.universidad.cl/noticias/concurso-innovacion' },
    { titulo: 'Memoria Institucional 2022', url: 'https://www.universidad.cl/noticias/mentorias-2025' },
    { titulo: 'Guía básica para las orgánicas estudiantiles: Reactiva la orgánica', url: 'https://www.universidad.cl/noticias/resultados-becas' },
    { titulo: 'Política integral para la prevención, investigación y sanción de acoso sexual, la violencia y la discriminación de género en el contexto de la ley N°21.369 (Decreto Rectoría N° 355/2022)', url: 'https://www.universidad.cl/noticias/plataforma-servicios' },
    { titulo: 'Reglamento de investigación y sanción del acoso sexual, la violencia y la discriminación de género (Decreto Rectoría N° 405/2022)', url: 'https://www.universidad.cl/noticias/charla-salud-mental' },
    { titulo: 'Memoria Institucional 2021', url: 'https://www.universidad.cl/noticias/ampliacion-casino' },
    { titulo: 'Memoria Institucional 2020', url: 'https://www.universidad.cl/noticias/encuesta-universitaria' },
    { titulo: 'Memoria Institucional 2019', url: 'https://www.universidad.cl/noticias/talleres-socioemocionales' },
    { titulo: 'Memoria Institucional 2018', url: 'https://www.universidad.cl/noticias/reciclaje-campus' },
    { titulo: 'Memoria Institucional 2017', url: 'https://www.universidad.cl/noticias/guia-primeros-anos' },
  ];

  return (
    <>
      {/* Migas de pan independientes */}
      <div className="container-fluid px-4 pt-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Página principal</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Publicaciones
            </li>
          </ol>
        </nav>
      </div>

      {/* Sección Hero */}
      <section className="hero-quienes-somos">
        <div className="hero-overlay text-dark">
          <h1 className="display-5 fw-bold">Publicaciones</h1>
        </div>
      </section>

      {/* Contenido principal */}
      <div className="container mt-4">

        {publicaciones.map((pub, index) => (
          <div className="card mb-3" key={index}>
            <div className="card-body">
              <h5 className="card-title">
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  {pub.titulo}
                </a>
              </h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PublicacionesPage;
