import React from 'react';
import contactoImagen from '../assets/contacto.jpg';

const Contacto = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    
    // Verificar que todos los campos estén completos
    const isFormValid = Object.values(formValues).every(
      value => value.trim() !== ''
    );

    if (!isFormValid) {
      alert('Por favor, complete todos los campos antes de enviar el formulario.');
      return;
    }

    // Mostrar mensaje de confirmación
    alert('Gracias por contactarnos. Nos pondremos en contacto con usted en brevedad.');
    event.target.reset();
  };

  return (
    <>
      {/* Contenido de la página */}
      <section className="hero-quienes-somos">
        <div className="hero-overlay text-white">
          <h1 className="display-5 fw-bold">Contacto</h1>
        </div>
      </section>
      <br /><br />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="form-container">
              <h2>Formulario de Contacto</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre y Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    placeholder="Ingrese su nombre y apellidos"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="run">RUN</label>
                  <input
                    type="text"
                    className="form-control"
                    id="run"
                    name="run"
                    placeholder="Ingrese su RUN (21217669-9)"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="campus">Campus o sede al que pertenece</label>
                  <select 
                    className="form-control" 
                    id="campus" 
                    name="campus" 
                    required
                  >
                    <option value="">Seleccione una opción</option>
                    <option>Campus Casa Central Valparaíso</option>
                    <option>Campus Santiago Vitacura</option>
                    <option>Campus Santiago San Joaquín</option>
                    <option>Campus Concepción</option>
                    <option>Campus Viña del Mar</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="areaConsulta">Área de consulta</label>
                  <select 
                    className="form-control" 
                    id="areaConsulta" 
                    name="areaConsulta" 
                    required
                  >
                    <option value="">Seleccione una opción</option>
                    <option>Apoyo y Acompañamiento</option>
                    <option>Salud y Bienestar</option>
                    <option>Actividades Extracurriculares</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="correo">Correo Electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    id="correo"
                    name="correo"
                    placeholder="Ingrese su correo electrónico"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="text"
                    className="form-control"
                    id="telefono"
                    name="telefono"
                    placeholder="Ingrese su teléfono (+56)"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea
                    className="form-control"
                    id="mensaje"
                    name="mensaje"
                    rows="3"
                    placeholder="Escriba su mensaje aquí"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-enviar">
                  Enviar
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={contactoImagen}
              alt="Imagen de la Universidad"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;