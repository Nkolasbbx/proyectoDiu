import React, { useState } from "react";

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

const horarios = {
  "Carmen Cardenas": ["09:00", "10:30", "12:00"],
  "Katia Puyol": ["09:00", "10:00", "13:30"],
  "Marisol Rojas": ["08:30", "12:15", "16:00"],
  "Matias Perez": ["08:30", "12:00", "16:00"],
  "Bernardita Cruchaga": ["10:00", "11:30", "15:00"],
  "Cristobal Cortazar": ["10:00", "11:30", "15:00"],
  "Enrique Cornejo": ["10:00", "11:30", "15:00"],
  "Maria Berrios": ["10:00", "11:30", "15:00"],
  "Andrea Schifferli": ["10:00", "11:30", "15:00"],
  "Josefa Goic": ["10:00", "11:30", "15:00"],
  "Soledad Kobilic": ["10:00", "11:30", "15:00"],
};

export default function AgendarHora() {
  const [step, setStep] = useState(1);
  const [tipo, setTipo] = useState("");
  const [fecha, setFecha] = useState("");
  const [doctor, setDoctor] = useState("");
  const [hora, setHora] = useState("");
  const [citasAgendadas, setCitasAgendadas] = useState([
    { tipo: "Psicólogo", doctor: "Luis Soto", fecha: "2025-04-25", hora: "12:15" },
    { tipo: "Dentista", doctor: "Carlos Gómez", fecha: "2025-04-26", hora: "08:30" },
  ]);

  // Funciones para avanzar entre pasos
  const irAFecha = () => {
    if (!tipo) {
      window.alert("Por favor selecciona un tipo de atención.");
      return;
    }
    setStep(2);
  };

  const irADoctores = () => {
    if (!fecha) {
      window.alert("Selecciona una fecha primero.");
      return;
    }
    setStep(3);
  };

  const seleccionarDoctor = (nombre) => {
    setDoctor(nombre);
    setHora(""); // reset hora al cambiar doctor
    setStep(4);
  };

  const seleccionarHora = (h) => {
    setHora(h);
  };

  const confirmarCita = () => {
    if (!hora) {
      window.alert("Selecciona una hora para continuar.");
      return;
    }
    setCitasAgendadas([
      ...citasAgendadas,
      { tipo, doctor, fecha, hora },
    ]);
    setStep(5);
  };

  const cancelarCita = (index) => {
    const cita = citasAgendadas[index];
    if (window.confirm(`¿Seguro que deseas cancelar la cita con ${cita.doctor} el ${new Date(cita.fecha + "T00:00:00").toLocaleDateString("es-CL")} a las ${cita.hora}?`)) {
      const nuevasCitas = [...citasAgendadas];
      nuevasCitas.splice(index, 1);
      setCitasAgendadas(nuevasCitas);
    }
  };

  const mostrarCitas = () => {
    setStep(6);
  };

  return (
    <section className="container-main" style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", padding: 30, marginTop: 20 }}>
      <div className="form-wrapper text-white" style={{ backgroundColor: "#0d6efd", borderRadius: 20, padding: 40, maxWidth: 800, width: "100%", boxShadow: "0 0 25px rgba(0,0,0,0.2)" }}>

        {/* Paso 1 */}
        {step === 1 && (
          <div className="step-box step active" style={{ backgroundColor: "white", borderRadius: 15, padding: 30, color: "black" }}>
            <h4>¿Qué atención necesitas?</h4>
            <select className="form-select mt-3" value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <option value="">Selecciona una opción</option>
              <option value="Asistente Social">Asistente Social</option>
              <option value="Psicólogo">Psicólogo</option>
              <option value="Dentista">Dentista</option>
            </select>
            <button className="btn btn-outline-primary mt-4 w-100" onClick={irAFecha}>Siguiente</button>
            <button className="btn btn-secondary mt-2 w-100" onClick={mostrarCitas}>Ver citas agendadas</button>
          </div>
        )}

        {/* Paso 2 */}
        {step === 2 && (
          <div className="step-box step active" style={{ backgroundColor: "white", borderRadius: 15, padding: 30, color: "black" }}>
            <h4>Selecciona una fecha</h4>
            <input
              type="date"
              className="form-control mt-3"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
            <button className="btn btn-outline-primary mt-4 w-100" onClick={irADoctores}>Siguiente</button>
            <button className="btn btn-secondary btn-back w-100 mt-2" onClick={() => setStep(1)}>Volver</button>
          </div>
        )}

        {/* Paso 3 */}
        {step === 3 && (
          <div className="step-box step active" style={{ backgroundColor: "white", borderRadius: 15, padding: 30, color: "black" }}>
            <h4>{`Disponibles el ${new Date(fecha + "T00:00:00").toLocaleDateString("es-CL")} (${tipo})`}</h4>
            <div className="mt-3">
              {profesionales[tipo]?.map((nombre) => (
                <div
                  key={nombre}
                  className={`card card-doctor mb-2${doctor === nombre ? " selected" : ""}`}
                  style={{
                    cursor: "pointer",
                    border: doctor === nombre ? "2px solid #0d6efd" : "2px solid transparent",
                    backgroundColor: doctor === nombre ? "#eaf1ff" : "white",
                    transition: "0.3s",
                  }}
                  onClick={() => seleccionarDoctor(nombre)}
                >
                  <div className="card-body" style={{ color: "black" }}>{nombre}</div>
                </div>
              ))}
            </div>
            <button className="btn btn-light btn-back w-100 mt-3" onClick={() => setStep(2)}>Volver</button>
          </div>
        )}

        {/* Paso 4 */}
        {step === 4 && (
          <div className="step-box step active" style={{ backgroundColor: "white", borderRadius: 15, padding: 30, color: "black" }}>
            <h4>{`Horas disponibles con ${doctor}`}</h4>
            <div id="horasDisponibles" className="mt-3">
              {horarios[doctor]?.map((h) => (
                <div
                  key={h}
                  className={`hour-btn${hora === h ? " selected" : ""}`}
                  style={{
                    display: "block",
                    width: "100%",
                    marginBottom: 10,
                    textAlign: "center",
                    border: "1px solid #0d6efd",
                    borderRadius: 6,
                    padding: 10,
                    color: hora === h ? "white" : "#0d6efd",
                    backgroundColor: hora === h ? "#0d6efd" : "white",
                    cursor: "pointer",
                  }}
                  onClick={() => seleccionarHora(h)}
                >
                  {h}
                </div>
              ))}
            </div>
            <button className="btn btn-primary w-100 mt-3" onClick={confirmarCita}>Confirmar cita</button>
            <button className="btn btn-light btn-back w-100 mt-2" onClick={() => setStep(3)}>Volver</button>
          </div>
        )}

        {/* Paso 5 */}
        {step === 5 && (
          <div className="step-box step active" style={{ backgroundColor: "white", borderRadius: 15, padding: 30, color: "black" }}>
            <h4>¡Cita agendada!</h4>
            <p className="mt-3">Tu cita ha sido agendada con éxito.</p>
            <button className="btn btn-secondary mt-2 w-100" onClick={() => setStep(6)}>Ver citas agendadas</button>
          </div>
        )}

        {/* Paso 6 */}
        {step === 6 && (
          <div className="step-box step active" style={{ backgroundColor: "white", borderRadius: 15, padding: 30, color: "black" }}>
            <h4>Tus citas agendadas</h4>
            <div className="mt-3">
              {citasAgendadas.length === 0 && <p className="text-muted">No tienes citas agendadas.</p>}
              {citasAgendadas.map((cita, index) => (
                <div
                  key={index}
                  className="card card-doctor mb-2"
                  style={{ cursor: "default", border: "2px solid transparent", backgroundColor: "white" }}
                >
                  <div className="card-body" style={{ color: "black" }}>
                    <strong>{cita.tipo}</strong><br />
                    {cita.doctor} - {new Date(cita.fecha + "T00:00:00").toLocaleDateString("es-CL")} a las {cita.hora}
                    <button
                      className="btn btn-sm btn-danger float-end"
                      onClick={() => cancelarCita(index)}
                      style={{ marginLeft: 10 }}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-secondary btn-back w-100 mt-3" onClick={() => setStep(1)}>Volver</button>
          </div>
        )}

      </div>
    </section>
  );
}
