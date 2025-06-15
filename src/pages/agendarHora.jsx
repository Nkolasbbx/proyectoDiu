import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const profesionales = {
  'Asistente Social': ['Carmen Cardenas', 'Katia Puyol', 'Marisol Rojas'],
  Psicólogo: [
    'Cristobal Cortazar',
    'Enrique Cornejo',
    'Maria Berrios',
    'Andrea Schifferli',
    'Josefa Goic',
    'Soledad Kobilic',
  ],
  Dentista: ['Matias Perez', 'Bernardita Cruchaga'],
};

const horariosBase = ['09:00', '10:30', '12:00', '14:00', '15:30'];

// Horarios no disponibles predefinidos
const horariosNoDisponibles = {
  'Carmen Cardenas': ['09:00', '14:00'],
  'Katia Puyol': ['10:30', '15:30'],
  'Marisol Rojas': ['12:00'],
  'Cristobal Cortazar': ['09:00', '15:30'],
  'Enrique Cornejo': ['10:30'],
  'Maria Berrios': ['12:00', '14:00'],
  'Andrea Schifferli': ['09:00', '12:00'],
  'Josefa Goic': ['10:30', '14:00'],
  'Soledad Kobilic': ['15:30'],
  'Matias Perez': ['09:00', '12:00', '15:30'],
  'Bernardita Cruchaga': ['10:30', '14:00'],
};

function obtenerFechas(desde, cantidad) {
  const fechas = [];
  for (let i = 0; i < cantidad; i++) {
    const fecha = new Date();
    fecha.setDate(fecha.getDate() + desde + i);
    fechas.push(fecha.toISOString().split('T')[0]);
  }
  return fechas;
}

export default function FormularioReserva() {
  const [paso, setPaso] = useState(1);
  const [especialidad, setEspecialidad] = useState('');
  const [profesional, setProfesional] = useState('');
  const [fechaSeleccionada, setFechaSeleccionada] = useState('');
  const [horaSeleccionada, setHoraSeleccionada] = useState('');
  const [offsetDias, setOffsetDias] = useState(0);
  const [diaSeleccionado, setDiaSeleccionado] = useState('');
  const [reservas, setReservas] = useState([]);
  const [mostrarReservas, setMostrarReservas] = useState(false);
  const [reservaConfirmada, setReservaConfirmada] = useState(false);
  const [reservaAEliminar, setReservaAEliminar] = useState(null);
  const [mostrarModalConfirmacion, setMostrarModalConfirmacion] = useState(false);

  const fechas = obtenerFechas(offsetDias, 5);

  // Cargar reservas al iniciar
  useEffect(() => {
    const reservasGuardadas = localStorage.getItem('reservas');
    if (reservasGuardadas) {
      setReservas(JSON.parse(reservasGuardadas));
    }
  }, []);

  // Guardar reservas cuando cambian
  useEffect(() => {
    localStorage.setItem('reservas', JSON.stringify(reservas));
  }, [reservas]);

  const confirmarReserva = () => {
    const nuevaReserva = {
      id: Date.now(),
      especialidad,
      profesional,
      fecha: fechaSeleccionada,
      hora: horaSeleccionada,
      fechaReserva: new Date().toISOString()
    };
    
    setReservas([...reservas, nuevaReserva]);
    setReservaConfirmada(true);
    
    // Resetear el formulario después de 3 segundos
    setTimeout(() => {
      setPaso(1);
      setEspecialidad('');
      setProfesional('');
      setFechaSeleccionada('');
      setHoraSeleccionada('');
      setDiaSeleccionado('');
      setReservaConfirmada(false);
    }, 3000);
  };

  const cancelarReserva = (id) => {
    setReservas(reservas.filter(reserva => reserva.id !== id));
    setMostrarModalConfirmacion(false);
    setReservaAEliminar(null);
  };

  // Función para verificar si una hora está ocupada
  const estaOcupada = (prof, hora, fecha) => {
    // Verificar si está en los horarios no disponibles predefinidos
    const noDisponible = horariosNoDisponibles[prof]?.includes(hora);
    
    // Verificar si hay una reserva existente para ese profesional, fecha y hora
    const reservaExistente = reservas.some(r => 
      r.profesional === prof && 
      r.fecha === fecha && 
      r.hora === hora
    );
    
    return noDisponible || reservaExistente;
  };

  const solicitarCancelarReserva = (reserva) => {
    setReservaAEliminar(reserva);
    setMostrarModalConfirmacion(true);
  };

  const cancelarEliminacion = () => {
    setMostrarModalConfirmacion(false);
    setReservaAEliminar(null);
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
                Solicitar hora
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="hero-quienes-somos bg-light py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">Reserva de horas médicas</h1>
          <p className="lead">Solicita una hora con los profesionales de la Dirección de Relaciones Estudiantiles.</p> 
        </div>
      </section>
      
      <div className="container mt-5">
        <div className="mb-4">
          <button 
            className={`btn ${mostrarReservas ? 'btn-outline-primary' : 'btn-primary'}`}
            onClick={() => setMostrarReservas(false)}
          >
            Nueva Reserva
          </button>
          <button 
            className={`btn ms-2 ${mostrarReservas ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setMostrarReservas(true)}
          >
            Mis Reservas ({reservas.length})
          </button>
        </div>

        {/* Modal de confirmación para eliminar reserva */}
        {mostrarModalConfirmacion && reservaAEliminar && (
          <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1050 }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header bg-warning">
                  <h5 className="modal-title">Cancelar</h5>
                  <button type="button" className="btn-close" onClick={cancelarEliminacion}></button>
                </div>
                <div className="modal-body">
                  <p>¿Estás seguro de que deseas cancelar esta reserva?</p>
                  <div className="alert alert-warning">
                    <p><strong>Especialidad:</strong> {reservaAEliminar.especialidad}</p>
                    <p><strong>Profesional:</strong> {reservaAEliminar.profesional}</p>
                    <p><strong>Fecha:</strong> {new Date(reservaAEliminar.fecha).toLocaleDateString('es-CL')}</p>
                    <p><strong>Hora:</strong> {reservaAEliminar.hora}</p>
                  </div>
                  <p className="text-danger"><strong>Esta acción no se puede deshacer.</strong></p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={cancelarEliminacion}>
                    No, mantener reserva
                  </button>
                  <button type="button" className="btn btn-danger" onClick={() => cancelarReserva(reservaAEliminar.id)}>
                    Sí, cancelar reserva
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {mostrarReservas ? (
          <div className="card p-4">
            <h4>Mis Reservas</h4>
            {reservas.length === 0 ? (
              <div className="alert alert-info">No tienes reservas programadas</div>
            ) : (
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Especialidad</th>
                      <th>Profesional</th>
                      <th>Fecha</th>
                      <th>Hora</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservas.map((reserva) => (
                      <tr key={reserva.id}>
                        <td>{reserva.especialidad}</td>
                        <td>{reserva.profesional}</td>
                        <td>{new Date(reserva.fecha).toLocaleDateString('es-CL')}</td>
                        <td>{reserva.hora}</td>
                        <td>
                          <button 
                            className="btn btn-sm btn-danger"
                            onClick={() => solicitarCancelarReserva(reserva)}
                          >
                            Cancelar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ) : (
          <>
            {reservaConfirmada ? (
              <div className="alert alert-success text-center">
                <h4 className="alert-heading">¡Reserva Confirmada!</h4>
                <p>
                  Has reservado con <strong>{profesional}</strong> el{' '}
                  <strong>{new Date(fechaSeleccionada).toLocaleDateString('es-CL')}</strong> a las{' '}
                  <strong>{horaSeleccionada}</strong>.
                </p>
                <p>Serás redirigido al inicio automáticamente.</p>
              </div>
            ) : (
              <>
                {/* Paso a paso con flechas */}
                <div className="d-flex align-items-center mb-4">
                  {[1, 2, 3].map((p, index) => (
                    <React.Fragment key={p}>
                      <div
                        className={`rounded-circle d-flex justify-content-center align-items-center ${
                          paso >= p ? 'bg-success text-white' : 'bg-secondary text-white'
                        }`}
                        style={{ width: 40, height: 40 }}
                      >
                        {p}
                      </div>
                      {index < 2 && (
                        <div className="flex-grow-1" style={{ height: '2px', backgroundColor: '#dee2e6' }}>
                          <div 
                            className="h-100" 
                            style={{ 
                              width: paso > p ? '100%' : '0%', 
                              backgroundColor: '#198754',
                              transition: 'width 0.3s ease'
                            }}
                          ></div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Paso 1 */}
                {paso === 1 && (
                  <div className="card p-4 mb-4">
                    <h4>1. Selecciona una especialidad</h4>
                    <div className="d-flex flex-wrap gap-2 mt-3">
                      {Object.keys(profesionales).map((esp) => (
                        <button
                          key={esp}
                          className="btn btn-outline-primary"
                          onClick={() => {
                            setEspecialidad(esp);
                            setPaso(2);
                            setDiaSeleccionado('');
                          }}
                        >
                          {esp}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Paso 2 */}
                {paso === 2 && (
                <div className="card p-4 mb-4">
                  <h4>2. Selecciona un día para ver disponibilidad ({especialidad})</h4>

                  <div className="d-flex flex-column gap-3 mb-4">
                    <div className="d-flex justify-content-center align-items-center gap-3">
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => setOffsetDias(Math.max(0, offsetDias - 5))}
                        disabled={offsetDias === 0}
                      >
                        ← Anterior
                      </button>
                      
                      <div className="d-flex flex-wrap gap-2">
                                              {fechas
                      .filter((fecha) => {
                        const dia = new Date(fecha).getDay();
                        return dia !== 0 && dia !== 6; // Excluye domingos (0) y sábados (6)
                      })
                      .map((fecha) => (
                        <button
                          key={fecha}
                          className={`btn ${
                            diaSeleccionado === fecha ? 'btn-primary' : 'btn-outline-primary'
                          }`}
                          onClick={() => {
                            setDiaSeleccionado(fecha);
                            setFechaSeleccionada(fecha);
                          }}
                        >
                          {new Date(fecha).toLocaleDateString('es-CL', {
                            weekday: 'short',
                            day: 'numeric',
                            month: 'short',
                          })}
                        </button>
                      ))}
                      </div>
                      
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => setOffsetDias(offsetDias + 5)}
                      >
                        Siguiente →
                      </button>
                    </div>
                  </div>

                  {diaSeleccionado && (
                    <>
                      <h5 className="mb-3 text-center">
                        Profesionales disponibles para {new Date(diaSeleccionado).toLocaleDateString('es-CL')}
                      </h5>

                      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {profesionales[especialidad].map((prof) => (
                          <div key={prof} className="col">
                            <div className="card h-100">
                              <div className="card-body text-center">
                                <strong className="d-block mb-2">{prof}</strong>
                                <div className="d-flex flex-wrap gap-2 justify-content-center">
                                  {horariosBase.map((hora) => {
                                    const ocupada = estaOcupada(prof, hora, diaSeleccionado);
                                    
                                    return (
                                      <button
                                        key={`${prof}-${hora}`}
                                        className={`btn btn-sm ${
                                          profesional === prof && horaSeleccionada === hora
                                            ? 'btn-primary'
                                            : ocupada 
                                              ? 'btn-danger text-white'
                                              : 'btn-outline-primary'
                                        }`}
                                        onClick={() => {
                                          if (!ocupada) {
                                            setProfesional(prof);
                                            setHoraSeleccionada(hora);
                                          }
                                        }}
                                        disabled={ocupada}
                                      >
                                        {hora} {ocupada && '(Ocupado)'}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Botones de navegación - ahora siempre visibles */}
                  <div className="d-flex justify-content-between mt-4">
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        setPaso(1);
                        setProfesional('');
                        setHoraSeleccionada('');
                      }}
                    >
                      ← Volver
                    </button>
                    <button
                      className="btn btn-primary"
                      disabled={!profesional || !horaSeleccionada}
                      onClick={() => setPaso(3)}
                    >
                      Continuar →
                    </button>
                  </div>
                </div>
              )}

                {/* Paso 3 - Confirmación */}
                {paso === 3 && (
                  <div className="card p-4">
                    <h4 className="mb-4">3. Confirma tu reserva</h4>
                    <div className="alert alert-info">
                      <p>
                        <strong>Especialidad:</strong> {especialidad}
                      </p>
                      <p>
                        <strong>Profesional:</strong> {profesional}
                      </p>
                      <p>
                        <strong>Fecha:</strong> {new Date(fechaSeleccionada).toLocaleDateString('es-CL')}
                      </p>
                      <p>
                        <strong>Hora:</strong> {horaSeleccionada}
                      </p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-secondary"
                        onClick={() => {
                          setPaso(2);
                        }}
                      >
                        ← Volver
                      </button>
                      <button
                        className="btn btn-success"
                        onClick={confirmarReserva}
                      >
                        Confirmar Reserva
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}