// src/components/Solicitudes.jsx
import React from 'react';
import solicitudesImg from '../assets/solicitudes.png'; // Asegúrate de tener esta imagen en assets
import { useAuth } from '../context/authContext';

const Solicitudes = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="container mt-5 mb-4">
      <div className="card d-flex flex-row align-items-center">
        <img
          className="img-fluid"
          src={solicitudesImg}
          alt="Solicitudes"
          style={{ width: '150px', borderRadius: '8px' }}
        />
        <div className="card-body">
          <h4 className="card-title">Solicitudes / Postulaciones</h4>
          <p className="card-text">Estado de beneficios estudiantiles vigentes</p>
        </div>
      </div>

      {isLoggedIn ? (
        <div id="infoSolicitudes" className="mt-4">
          <h5>Estado de Beneficios 2025</h5>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Beneficio</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Beca de Alimentación JUNAEB</td>
                <td className="text-success">Aprobada</td>
              </tr>
              <tr>
                <td>Residencia Estudiantil</td>
                <td className="text-warning">En revisión</td>
              </tr>
              <tr>
                <td>Subsidio de Transporte</td>
                <td className="text-danger">Rechazada</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="alert alert-danger mt-4" role="alert">
          Es necesario iniciar sesión para ver estos datos.
        </div>
      )}
    </div>
  );
};

export default Solicitudes;
