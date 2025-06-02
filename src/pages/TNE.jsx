// src/components/TNE.jsx
import React from 'react';
import tneImg from '../assets/tne.png';
import { useAuth } from '../context/authContext';

const TNE = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="container mt-5 mb-4">
      <div className="card d-flex flex-row align-items-center">
        <img
          className="img-fluid"
          src={tneImg}
          alt="TNE"
          style={{ width: '150px', borderRadius: '8px' }}
        />
        <div className="card-body">
          <h4 className="card-title">TNE</h4>
          <p className="card-text">
            Información TNE alumnos primer año y cursos superiores
          </p>
        </div>
      </div>

      {isLoggedIn ? (
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
                  </a>. Recuerda que la TNE 2024 vence el 31-05-2025.
                </td>
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

export default TNE;
