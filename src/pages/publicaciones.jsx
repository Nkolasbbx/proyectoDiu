import React from 'react';
import { Link } from 'react-router-dom';

export const PublicacionesPage = () => {
  const publicaciones = [
    { titulo: 'Memoria Institucional 2023', url: 'https://www.universidad.cl/noticias/biblioteca-campus-sur' },
    { titulo: 'Reglamento Institucional de Derechos, Deberes y Disciplina del Estudiantado (Decreto de Rectoría N° 056/2024)', url: 'https://www.universidad.cl/noticias/concurso-innovacion' },
    { titulo: 'Memoria Institucional 2022', url: 'https://www.universidad.cl/noticias/mentorias-2025' },
    { titulo: 'Guía básica para las orgánicas estudiantiles: Reactiva la orgánica', url: 'https://www.universidad.cl/noticias/resultados-becas' },
    { titulo: 'Política integral para la prevención, investigación y sanción de acoso sexual, la violencia y la discriminación de género (Ley N°21.369)', url: 'https://www.universidad.cl/noticias/plataforma-servicios' },
    { titulo: 'Reglamento de investigación y sanción del acoso sexual, la violencia y la discriminación de género (Decreto Rectoría N° 405/2022)', url: 'https://www.universidad.cl/noticias/charla-salud-mental' },
    { titulo: 'Memoria Institucional 2021', url: 'https://www.universidad.cl/noticias/ampliacion-casino' },
    { titulo: 'Memoria Institucional 2020', url: 'https://www.universidad.cl/noticias/encuesta-universitaria' },
    { titulo: 'Memoria Institucional 2019', url: 'https://www.universidad.cl/noticias/talleres-socioemocionales' },
    { titulo: 'Memoria Institucional 2018', url: 'https://www.universidad.cl/noticias/reciclaje-campus' },
    { titulo: 'Memoria Institucional 2017', url: 'https://www.universidad.cl/noticias/guia-primeros-anos' },
  ];

  return (
    <>
      {/* Migas de pan mejoradas visualmente */}
      <div className="bg-light py-2 border-bottom mb-3">
        <div className="container px-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-decoration-none text-primary">
                  🏠 Inicio
                </Link>
              </li>
              <li className="breadcrumb-item active text-secondary" aria-current="page">
                Publicaciones
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Sección Hero */}
      <section className="hero-quienes-somos bg-light py-5">
        
        <div className="container">
          <h1 className="display-5 fw-bold">Publicaciones</h1>
          <p className="lead">Documentos oficiales, reglamentos y memorias institucionales disponibles para descarga y consulta.</p>
        </div>
      </section>

      {/* Lista de publicaciones */}
      <div className="container mt-4">
        <div className="row">
          {publicaciones.map((pub, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body">
                  <h5 className="card-title fw-semibold">
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-primary"
                    >
                      {pub.titulo}
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PublicacionesPage;
