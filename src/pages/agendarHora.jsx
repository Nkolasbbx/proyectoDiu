import React, { useState, useEffect } from "react";

const profesionales = {
  "Asistente Social": ["Carmen Cardenas", "Katia Puyol", "Marisol Rojas"],
  Psicólogo: [
    "Cristobal Cortazar",
    "Enrique Cornejo",
    "Maria Berrios",
    "Andrea Schifferli",
    "Josefa Goic",
    "Soledad Kobilic",
  ],
  Dentista: ["Matias Perez", "Bernardita Cruchaga"],
};

const horariosBase = ["09:00", "10:30", "12:00", "14:00", "15:30"];

function generarFechas(dias = 5) {
  const fechas = [];
  const hoy = new Date();
  for (let i = 0; i < dias; i++) {
    const fecha = new Date(hoy);
    fecha.setDate(hoy.getDate() + i);
    const formateada = fecha.toLocaleDateString("es-CL", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
    });
    fechas.push(formateada);
  }
  return fechas;
}

export default function AgendaSeparada() {
  const [vista, setVista] = useState("agendar"); // 'agendar' o 'misHoras'
  const [especialidad, setEspecialidad] = useState("");
  const [profesionalSeleccionado, setProfesionalSeleccionado] = useState("");
  const [agenda, setAgenda] = useState([]);

  const [seleccionHora, setSeleccionHora] = useState(null); // { fecha, hora } o null

  // Nuevos estados para mensajes
  const [mensajeError, setMensajeError] = useState("");
  const [mensajeExito, setMensajeExito] = useState("");

  const fechas = generarFechas(5);

  // Limpiar mensajes después de 3 segundos (solo éxito)
  useEffect(() => {
    if (mensajeExito) {
      const timer = setTimeout(() => setMensajeExito(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [mensajeExito]);

  const agendarHoraConfirmada = () => {
    setMensajeError("");
    setMensajeExito("");

    if (!seleccionHora) {
      setMensajeError("Selecciona una hora antes de confirmar.");
      return;
    }

    const { fecha, hora } = seleccionHora;

    const yaAgendadaMismaHora = agenda.some(
      (a) =>
        a.fecha === fecha &&
        a.hora === hora &&
        a.profesional === profesionalSeleccionado
    );
    if (yaAgendadaMismaHora) {
      setMensajeError("Esa hora ya está agendada.");
      return;
    }

    const yaAgendadaMismaEspecialidad = agenda.some(
      (a) => a.especialidad === especialidad
    );
    if (yaAgendadaMismaEspecialidad) {
      setMensajeError(
        `Ya tienes una hora agendada para ${especialidad}. Solo puedes tener una por especialidad.`
      );
      return;
    }

    setAgenda([
      ...agenda,
      {
        profesional: profesionalSeleccionado,
        fecha,
        hora,
        especialidad,
      },
    ]);

    setSeleccionHora(null);
    setMensajeExito("Hora agendada correctamente.");
  };

  const cancelarHora = (index) => {
    const nuevaAgenda = [...agenda];
    nuevaAgenda.splice(index, 1);
    setAgenda(nuevaAgenda);
  };

  const horaOcupada = (profesional, fecha, hora) => {
    return agenda.some(
      (a) => a.fecha === fecha && a.hora === hora && a.profesional === profesional
    );
  };

  return (
    <div
      className="container"
      style={{ maxWidth: 750, margin: "auto", padding: 20 }}
    >
      <nav className="d-flex gap-2 mb-4">
        <button
          className={`btn ${
            vista === "agendar" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setVista("agendar")}
        >
          Agendar Hora
        </button>
        <button
          className={`btn ${
            vista === "misHoras" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setVista("misHoras")}
        >
          Mis Horas
        </button>
      </nav>

      {vista === "agendar" && (
        <>
          <h3>Agendar hora por especialista</h3>

          <div className="mb-4">
            <label className="form-label">Tipo de atención:</label>
            <select
              className="form-select"
              value={especialidad}
              onChange={(e) => {
                setEspecialidad(e.target.value);
                setProfesionalSeleccionado("");
                setSeleccionHora(null);
                setMensajeError("");
                setMensajeExito("");
              }}
            >
              <option value="">-- Selecciona --</option>
              {Object.keys(profesionales).map((tipo) => (
                <option key={tipo} value={tipo}>
                  {tipo}
                </option>
              ))}
            </select>
          </div>

          {especialidad && (
            <div className="mb-4">
              <h4>Profesionales disponibles:</h4>
              <div className="list-group">
                {profesionales[especialidad].map((nombre) => (
                  <button
                    key={nombre}
                    className={`list-group-item list-group-item-action ${
                      profesionalSeleccionado === nombre ? "active" : ""
                    }`}
                    onClick={() => {
                      setProfesionalSeleccionado(nombre);
                      setSeleccionHora(null);
                      setMensajeError("");
                      setMensajeExito("");
                    }}
                  >
                    {nombre}
                  </button>
                ))}
              </div>
            </div>
          )}

          {profesionalSeleccionado && (
            <div>
              <h4 className="mt-4">Horarios para {profesionalSeleccionado}:</h4>
              {fechas.map((fecha) => (
                <div key={fecha} className="border rounded p-3 my-3">
                  <strong>{fecha}</strong>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {horariosBase.map((hora) => {
                      const ocupada = horaOcupada(
                        profesionalSeleccionado,
                        fecha,
                        hora
                      );
                      const seleccionada =
                        seleccionHora &&
                        seleccionHora.fecha === fecha &&
                        seleccionHora.hora === hora;

                      return (
                        <button
                          key={hora}
                          className={`btn btn-sm ${
                            seleccionada ? "btn-success" : "btn-outline-primary"
                          }`}
                          disabled={ocupada}
                          onClick={() =>
                            setSeleccionHora({ fecha: fecha, hora: hora })
                          }
                        >
                          {hora}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
              <button
                className="btn btn-primary mt-3"
                onClick={agendarHoraConfirmada}
                disabled={!seleccionHora}
              >
                Confirmar hora
              </button>

              {/* Mensajes */}
              {mensajeError && (
                <div className="alert alert-danger mt-3">{mensajeError}</div>
              )}
              {mensajeExito && (
                <div className="alert alert-success mt-3">{mensajeExito}</div>
              )}
            </div>
          )}
        </>
      )}

      {vista === "misHoras" && (
        <div>
          <h3>Mis horas agendadas</h3>
          {agenda.length === 0 ? (
            <p>No tienes horas agendadas.</p>
          ) : (
            <ul className="list-group mt-3">
              {agenda.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>
                    <strong>{item.fecha}</strong> a las <strong>{item.hora}</strong>{" "}
                    con <strong>{item.profesional}</strong> ({item.especialidad})
                  </span>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => cancelarHora(index)}
                  >
                    Cancelar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
