import React, { useState } from 'react';
import { useAuth } from '../context/authContext';
import '../stylesheets/servicios.scss';
import antecedentesImg from '../assets/antecedentes.png';
import solicitudesImg from '../assets/solicitudes.png';
import tneImg from '../assets/tne.png';
import { Link } from 'react-router-dom';

const MiPerfil = () => {
  const { isLoggedIn } = useAuth();

  const [userData, setUserData] = useState({
    name: "Juan Pérez",
    email: "juan.perez@usm.cl",
    phone: "+56 9 1234 5678",
    address: "Av. Principal 123, Santiago",
    birthDate: "21-01-2003",
    studentId: "202173539-4",
    career: "Ingeniería Civil en Informática"
  });

  const [editMode, setEditMode] = useState(false);
  const [tempData, setTempData] = useState({ ...userData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUserData({ ...tempData });
    setEditMode(false);
  };

  const handleCancel = () => {
    setTempData({ ...userData });
    setEditMode(false);
  };

  // Estilos para contenedor con imagen + título en línea
  const imgTitleContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  };

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
                Mi perfil
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="hero-quienes-somos bg-light py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">Mi perfil</h1>
          <p className="lead">Aquí puedes ver y editar tu información personal y académica.</p>
        </div>
      </section>
    
    <div className="container my-5">
      {/* PERFIL CENTRADO Y CON ANCHO IGUAL */}
      <div className="d-flex justify-content-center mb-5">
        <div className="card p-3 shadow-sm" style={{ maxWidth: '700px', width: '100%' }}>
          {editMode ? (
            <form className="d-flex flex-column">
              <h3 className="mb-3 fs-4 text-center">Editar Perfil</h3>
              <p className="text-muted text-center mb-3">Solo puedes editar tu teléfono y dirección</p>
              
              {[
                { name: 'name', label: 'Nombre', disabled: true },
                { name: 'email', label: 'Email', disabled: true },
                { name: 'phone', label: 'Teléfono', disabled: false },
                { name: 'address', label: 'Dirección', disabled: false },
                { name: 'birthDate', label: 'Fecha de Nacimiento', disabled: true },
                { name: 'studentId', label: 'Matrícula', disabled: true },
                { name: 'career', label: 'Carrera', disabled: true },
              ].map((field, index) => (
                <div key={index} className="mb-2">
                  <label className="form-label fs-6">{field.label}:</label>
                  <input
                    type={field.type || 'text'}
                    name={field.name}
                    value={tempData[field.name]}
                    onChange={handleInputChange}
                    className={`form-control form-control-sm ${field.disabled ? 'bg-light' : ''}`}
                    disabled={field.disabled}
                  />
                </div>
              ))}
              
              <div className="d-flex justify-content-end gap-2 mt-3">
                <button type="button" onClick={handleCancel} className="btn btn-danger btn-sm">Cancelar</button>
                <button type="button" onClick={handleSave} className="btn btn-success btn-sm">Guardar</button>
              </div>
            </form>
          ) : (
            <>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="fs-4 mb-0">{userData.name}</h2>
                <button onClick={() => setEditMode(true)} className="btn btn-success btn-sm">Editar</button>
              </div>
              <div className="mb-3 fs-6"><strong>Email:</strong> {userData.email}</div>
              <div className="mb-3 fs-6"><strong>Teléfono:</strong> {userData.phone}</div>
              <div className="mb-3 fs-6"><strong>Dirección:</strong> {userData.address}</div>
              <div className="mb-3 fs-6"><strong>Fecha de Nacimiento:</strong> {userData.birthDate}</div>

              <hr />

              <div className="fs-6"><strong>Matrícula:</strong> {userData.studentId}</div>
              <div className="fs-6"><strong>Carrera:</strong> {userData.career}</div>
            </>
          )}
        </div>
      </div>

      {/* TARJETAS apiladas verticalmente, con imagen a la izquierda y título a la derecha de la imagen */}
      <div className="d-flex flex-column gap-4" style={{ maxWidth: '700px', margin: '0 auto' }}>
        {[{
          img: antecedentesImg,
          alt: 'Antecedentes',
          title: 'Antecedentes Socioeconómicos',
          content: (
            <table className="table table-bordered mb-0">
              <tbody>
                <tr><th>Estado del Proceso</th><td>NO vigente</td></tr>
                <tr>
                  <th>Próximas fechas</th>
                  <td><a href="https://rree.usm.cl" target="_blank" rel="noreferrer">rree.usm.cl</a></td>
                </tr>
                <tr><th>Consultas</th><td>Contactar a Bienestar Estudiantil de su Campus o Sede.</td></tr>
              </tbody>
            </table>
          )
        }, {
          img: solicitudesImg,
          alt: 'Solicitudes',
          title: 'Solicitudes/Postulaciones',
          content: (
            <table className="table table-bordered mb-0">
              <tbody>
                <tr><th>Estado del Proceso</th><td>No vigente para PRESELECCIONADOS al CAE 2025</td></tr>
                <tr><th>Notificación de plazos</th><td>Se informan al correo institucional</td></tr>
                <tr><th>Instrucciones</th><td><a href="https://portal.ingresa.cl" target="_blank" rel="noreferrer">Portal Ingresa</a></td></tr>
                <tr><th>Renovantes</th><td>Solicitar monto en Portal Ingresa según plazos definidos</td></tr>
              </tbody>
            </table>
          )
        }, {
          img: tneImg,
          alt: 'TNE',
          title: 'TNE',
          content: (
            <table className="table table-bordered mb-0">
              <tbody>
                <tr><th>Nombre</th><td>BENJAMIN RODOLFO GOMEZ CASTILLO</td></tr>
                <tr><th>RUT</th><td>21227648-0</td></tr>
                <tr><th>Estado TNE 2025</th><td>ACEPTADA</td></tr>
                <tr>
                  <th>Observación</th>
                  <td>
                    Ya estás habilitado(a) para revalidar tu TNE en TÓTEM BIP. <br />
                    Más información en <a href="https://www.junaeb.cl/tarjeta-tne/" target="_blank" rel="noreferrer">junaeb.cl</a>
                  </td>
                </tr>
              </tbody>
            </table>
          )
        }].map(({ img, alt, title, content }, i) => (
          <div key={i} className="card shadow-sm p-3" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Contenedor flex para imagen + título */}
            <div style={imgTitleContainerStyle}>
              <img src={img} alt={alt} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
              <h4 className="card-title mb-0">{title}</h4>
            </div>
            {/* Contenido abajo */}
            <div>
              {content}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default MiPerfil;