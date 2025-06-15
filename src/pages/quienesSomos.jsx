import React from 'react';
import { Link } from 'react-router-dom';
import organigramaImage from '../assets/organigrama.png';

const QuienesSomos = () => {
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
                Quiénes somos
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Sección Hero */}
      <section className="hero-quienes-somos bg-light py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">Quiénes somos</h1>
          <p className="lead">Conoce la misión, visión y organización de la Dirección de Relaciones Estudiantiles de la USM.</p>
        </div>
      </section>

      {/* Contenido principal */}
      <div className="container mb-5">
        <div className="row justify">
          <div className="col-md-10">
            <h2 className="text-dark mb-3">Dirección de Relaciones Estudiantiles</h2>
            <p style={{ textAlign: 'justify' }}>
              La Dirección de Relaciones Estudiantiles contribuye a la formación integral de la comunidad estudiantil 
              de todos los Campus y Sedes de la USM. Provee apoyo psicosocial, asistencial y de fomento a iniciativas 
              del estudiantado, con el objetivo de acompañarlos y ayudarlos durante su vida universitaria, especialmente 
              atendiendo al legado testamentario de nuestro fundador.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Esta dirección está liderada por <strong>Cecilia Reyes Covarrubias</strong> y cuenta con representación en todos los emplazamientos de la USM:
            </p>
            <ul className="ms-3">
              <li><strong>Casa Central Valparaíso:</strong> Paulina Pereda, Jefa de Relaciones Estudiantiles.</li>
              <li><strong>Sede Viña del Mar:</strong> Claudia Oyarce, Jefa de Bienestar Estudiantil.</li>
              <li><strong>San Joaquín:</strong> Rodrigo Pérez, Subdirector de Relaciones Estudiantiles.</li>
              <li><strong>Vitacura:</strong> Rodrigo Pérez, Subdirector de Relaciones Estudiantiles.</li>
              <li><strong>Sede Concepción:</strong> Javier Aliaga, Jefe de Bienestar Estudiantil.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Organigrama */}
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-md-10 text-center">
            <h3 className="mb-4 text-dark">Organigrama</h3>
            <img 
              src={organigramaImage} 
              alt="Organigrama Dirección de Relaciones Estudiantiles" 
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuienesSomos;
