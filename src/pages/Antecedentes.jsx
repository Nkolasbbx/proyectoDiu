// src/components/Antecedentes.jsx
import React from 'react';
import antecedentesImg from '../assets/antecedentes.png'; // Asegúrate de tener esta imagen en assets
import { useAuth } from '../context/authContext';

const Antecedentes = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="container mt-5 mb-4">
      <div className="card d-flex flex-row align-items-center">
        <img
          className="img-fluid"
          src={antecedentesImg}
          alt="Antecedentes Socioeconómicos"
          style={{ width: '150px', borderRadius: '8px' }}
        />
        <div className="card-body">
          <h4 className="card-title">Antecedentes Socioeconómicos</h4>
          <p className="card-text">Información socioeconómica del estudiante</p>
        </div>
      </div>

      {isLoggedIn ? (
        <div id="infoAntecedentes" className="mt-4">
          <h5>Detalle de Antecedentes</h5>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Condición</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ingreso económico familiar</td>
                <td>Menor al ingreso mínimo mensual</td>
              </tr>
              <tr>
                <td>Cantidad de integrantes en el grupo familiar</td>
                <td>5 personas</td>
              </tr>
              <tr>
                <td>Postulación a beneficios del Estado</td>
                <td>Postula a becas JUNAEB</td>
              </tr>
              <tr>
                <td>Situación habitacional</td>
                <td>Vivienda arrendada en sector rural</td>
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

export default Antecedentes;
