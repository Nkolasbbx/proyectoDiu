import React from 'react';
import { Link } from 'react-router-dom';

// Importar imágenes (asegúrate de tener estas imágenes en tu proyecto)
import casaCentral from '../assets/casacentral.jpg';
import sanJoaquin from '../assets/sanjoaquin.jpg';

export const HomePage = () => {
  return (
    <>
      {/* Contenido de la página */}
      <section className="hero">
        <div className="hero-overlay text-dark">
          <h1 className="display-5 fw-bold">Dirección de relaciones estudiantiles</h1>
          <p className="lead">Accede a los distintos servicios de la universidad</p>
        </div>
      </section>

      <br /><br />

      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="card d-flex flex-row">
              {/* Imagen a la izquierda */}
              <img className="card-img-custom img-fluid" src={casaCentral} alt="Casa Central" style={{maxWidth: '50%'}} />
              
              {/* Contenido a la derecha */}
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
      
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="card d-flex flex-row">
              {/* Contenido a la izquierda */}
              <div className="card-body">
                <h2 className="card-title">Postula a los distintos beneficios estudiantiles.</h2>
                <Link to="/beneficios" className="btn btn-primary">Postular</Link>
                <blockquote></blockquote>
                <figcaption className="blockquote-footer">
                  Postula aquí
                </figcaption>
              </div>
      
              {/* Imagen a la derecha */}
              <img className="card-img-custom img-fluid" src={sanJoaquin} alt="Campus San Joaquín" style={{maxWidth: '50%'}} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;