import React, { useState } from 'react';
import '../stylesheets/servicios.scss';
import antecedentesImg from '../assets/antecedentes.png';
import solicitudesImg from '../assets/solicitudes.png';
import tneImg from '../assets/tne.png';
import { useAuth } from '../context/authContext'; 

const ServiciosPage = () => {
  const [visibleBlocks, setVisibleBlocks] = useState({
    infoAntecedentes: false,
    infoSolicitudes: false,
    infoTNE: false
  });

  const { isLoggedIn } = useAuth();

  const toggleInfo = (blockId) => {
    setVisibleBlocks(prev => ({
      ...prev,
      [blockId]: !prev[blockId]
    }));
  };

  return (
    <div className="servicios-container">
      {/* ANTECEDENTES */}
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
        isLoggedIn ? (
          <div id="infoAntecedentes" className="mt-4">
            <h5 className="title mb-3">Información Proceso Socioeconómico</h5>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Estado del Proceso</th>
                  <td>NO vigente</td>
                </tr>
                <tr>
                  <th>Próximas fechas</th>
                  <td>
                    Ver sitio oficial: <a href="https://rree.usm.cl" target="_blank" rel="noreferrer">rree.usm.cl</a>
                  </td>
                </tr>
                <tr>
                  <th>Consultas</th>
                  <td>Contactar a Bienestar Estudiantil de su Campus o Sede.</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="info-block red-block">
            <h5>Es necesario iniciar sesión para ver estos datos.</h5>
          </div>
        )
      )}

      {/* SOLICITUDES */}
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
      {visibleBlocks.infoSolicitudes && isLoggedIn && (
        <div id="infoSolicitudes" className="mt-4">
          <h5 className="title mb-3">Solicitud Monto Crédito con aval del estado 2025</h5>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Estado del Proceso</th>
                <td>No vigente para PRESELECCIONADOS al CAE 2025</td>
              </tr>
              <tr>
                <th>Notificación de plazos</th>
                <td>Se informan al correo electrónico institucional de los estudiantes involucrados</td>
              </tr>
              <tr>
                <th>Instrucciones y seguimiento</th>
                <td>
                  Revisar en{' '}
                  <a href="https://portal.ingresa.cl" target="_blank" rel="noreferrer">
                    Portal Ingresa
                  </a>
                </td>
              </tr>
              <tr>
                <th>Renovantes</th>
                <td>Solicitar monto en Portal Ingresa según plazos definidos por la institución</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {visibleBlocks.infoSolicitudes && !isLoggedIn && (
        <div className="info-block red-block">
          <h5>Es necesario iniciar sesión para ver estos datos.</h5>
        </div>
      )}


      {/* TNE */}
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
      {visibleBlocks.infoTNE && isLoggedIn && (
        <div id="infoTNE" className="mt-4">
          <h5>Información TNE 2025</h5>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>NOMBRE</th>
                <td>BENJAMIN RODOLFO GOMEZ CASTILLO</td>
              </tr>
              <tr>
                <th>RUT</th>
                <td>21227648-0</td>
              </tr>
              <tr>
                <th>ESTADO TNE 2025</th>
                <td>ACEPTADA</td>
              </tr>
              <tr>
                <th>MOTIVO / OBSERVACIÓN</th>
                <td>
                  Ya estás habilitado(a) para REVALIDAR tu TNE en TÓTEM BIP (debes tener tu TNE en buen estado).  
                  Busca el tótem más cercano en{' '}
                  <a href="https://www.junaeb.cl/tarjeta-tne/" target="_blank" rel="noreferrer">
                    www.junaeb.cl/tarjeta-tne
                  </a>.
                  Recuerda que la TNE 2024 vence el 31-05-2025.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* En caso de que no esté logueado y quiera ver esta info */}
      {visibleBlocks.infoTNE && !isLoggedIn && (
        <div className="info-block red-block">
          <h5>Es necesario iniciar sesión para ver estos datos.</h5>
        </div>
      )}

    </div>
  );
};

export default ServiciosPage;
