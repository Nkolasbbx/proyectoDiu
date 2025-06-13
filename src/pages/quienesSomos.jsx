import React from 'react';
import { Link } from 'react-router-dom';
import organigramaImage from '../assets/organigrama.png';

const QuienesSomos = () => {
  return (
    <>
      {/* Migas de pan arriba del hero */}
      <div className="container-fluid px-4 pt-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Página principal</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Quiénes somos
            </li>
          </ol>
        </nav>
      </div>

      {/* Sección Hero */}
      <section className="hero-quienes-somos">
        <div className="hero-overlay text-dark">
          <h1 className="display-5 fw-bold">Quiénes somos</h1>
        </div>
      </section>

      {/* Contenido principal */}
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-8">
            <h2 className="text-dark">Dirección de Relaciones Estudiantiles</h2>
            <p className="text-justify">
              La Dirección de Relaciones Estudiantiles contribuye a la formación integral de la comunidad 
              estudiantil de todos los Campus y Sedes de la USM. Provee apoyo psicosocial, asistencial 
              y de fomento a iniciativas del estudiantado, con el objetivo de acompañarlos y ayudarlos 
              durante su vida universitaria, especialmente atendiendo al legado testamentario de nuestro fundador.
            </p>
            <p>
              La Dirección de Relaciones Estudiantiles está dirigida por Cecilia Reyes Covarrubias 
              y tiene representación en todos los emplazamientos USM:
            </p>
            <ul>
              <li>Campus Casa Central Valparaíso: Paulina Pereda, Jefa de Relaciones Estudiantiles.</li>
              <li>Sede Viña del Mar: Claudia Oyarce, Jefa de Bienestar Estudiantil.</li>
              <li>Campus Santiago San Joaquín: Rodrigo Pérez, Subdirector de Relaciones Estudiantiles.</li>
              <li>Campus Santiago Vitacura: Rodrigo Pérez, Subdirector de Relaciones Estudiantiles.</li>
              <li>Sede Concepción: Javier Aliaga, Jefe de Bienestar Estudiantil.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Imagen del organigrama */}
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-md-12 text-center">
            <img 
              src={organigramaImage} 
              alt="Dirección de Relaciones Estudiantiles" 
              className="img-fluid" 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuienesSomos;
