import React from 'react';
import { Link } from 'react-router-dom';

// Importar imágenes
import beneficio1 from '../assets/beneficios1.png';
import beneficio2 from '../assets/beneficios2.png';
import beneficio3 from '../assets/beneficios3.png';
import beneficio4 from '../assets/beneficios4.png';
import beneficio5 from '../assets/beneficios5.png';

const BeneficiosPage = () => {
  return (
    <div className="beneficios-page">
      <br /><br />
      
      <div className="container">
        <div className="row">
          {/* Primera imagen */}
          <div className="col-md-4 mb-4">
            <div className="card text-center">
              <a href="https://portal.beneficiosestudiantiles.cl/gratuidad" target="_blank" rel="noopener noreferrer">
                <img src={beneficio1} className="card-img-top img-fluid" alt="Beneficio 1" />
              </a>
            </div>
          </div>
      
          {/* Segunda imagen */}
          <div className="col-md-4 mb-4">
            <div className="card text-center">
              <a href="https://portal.beneficiosestudiantiles.cl/" target="_blank" rel="noopener noreferrer">
                <img src={beneficio2} className="card-img-top img-fluid" alt="Beneficio 2" />
              </a>
            </div>
          </div>
    
          {/* Tercera imagen */}
          <div className="col-md-4 mb-4">
            <div className="card text-center">
              <a href="https://rree.usm.cl/atencion-social-beneficios/beneficios-usm/" target="_blank" rel="noopener noreferrer">
                <img src={beneficio3} className="card-img-top img-fluid" alt="Beneficio 3" />
              </a>
            </div>
          </div>
    
          {/* Cuarta imagen */}
          <div className="col-md-4 mb-4">
            <div className="card text-center">
              <a href="https://rree.usm.cl/atencion-social-beneficios/becas-junaeb/" target="_blank" rel="noopener noreferrer">
                <img src={beneficio4} className="card-img-top img-fluid" alt="Beneficio 4" />
              </a>
            </div>
          </div>
    
          {/* Quinta imagen */}
          <div className="col-md-4 mb-4">
            <div className="card text-center">
              <a href="https://rree.usm.cl/atencion-social-beneficios/tne/" target="_blank" rel="noopener noreferrer">
                <img src={beneficio5} className="card-img-top img-fluid" alt="Beneficio 5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeneficiosPage;