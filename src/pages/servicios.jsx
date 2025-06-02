import React, { useState } from 'react';
import '../stylesheets/servicios.scss'; // Importación del archivo SCSS
import antecedentesImg from '../assets/antecedentes.png';
import solicitudesImg from '../assets/solicitudes.png';
import tneImg from '../assets/tne.png';

const ServiciosPage = () => {
  const [visibleBlocks, setVisibleBlocks] = useState({
    infoAntecedentes: false,
    infoSolicitudes: false,
    infoTNE: false
  });

  const toggleInfo = (blockId) => {
    setVisibleBlocks(prev => ({
      ...prev,
      [blockId]: !prev[blockId]
    }));
  };

  return (
    <div className="servicios-container">
      <div className="service-card">
        <img src={antecedentesImg} alt="Antecedentes" />
        <div className="card-body">
          <h4>Antecedentes socioeconómicos</h4>
          <p>Revisa tu declaración aquí!</p>
          <button 
            className="btn btn-primary" 
            onClick={() => toggleInfo('infoAntecedentes')}
          >
            Ver más
          </button>
        </div>
      </div>
      
      {visibleBlocks.infoAntecedentes && (
        <div className="info-block red-block">
          <h5>Es necesario iniciar sesión para ver estos datos.</h5>
        </div>
      )}

      <div className="service-card">
        <img src={solicitudesImg} alt="Solicitudes" />
        <div className="card-body">
          <h4>Solicitudes/postulaciones</h4>
          <p>Solicitud monto crédito con aval del estado</p>
          <button 
            className="btn btn-primary" 
            onClick={() => toggleInfo('infoSolicitudes')}
          >
            Ver más
          </button>
        </div>
      </div>
      
      {visibleBlocks.infoSolicitudes && (
        <div className="info-block red-block">
          <h5>Es necesario iniciar sesión para ver estos datos.</h5>
        </div>
      )}

      <div className="service-card">
        <img src={tneImg} alt="TNE" />
        <div className="card-body">
          <h4>TNE</h4>
          <p>Información TNE alumnos primer año y cursos superiores</p>
          <button 
            className="btn btn-primary" 
            onClick={() => toggleInfo('infoTNE')}
          >
            Ver más
          </button>
        </div>
      </div>
      
      {visibleBlocks.infoTNE && (
        <div className="info-block red-block">
          <h5>Es necesario iniciar sesión para ver estos datos.</h5>
        </div>
      )}
    </div>
  );
};

export default ServiciosPage;