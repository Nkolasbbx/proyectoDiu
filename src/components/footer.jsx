import React from 'react'
import usmLogo from '../assets/logo-usm.png' // Asegúrate que el logo esté en esta ruta

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0A70A7', color: 'white', padding: '1rem', marginTop: '2rem' }}>
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo alineado a la izquierda */}
        <img src={usmLogo} alt="Logo Universidad" style={{ height: '40px' }} />

        {/* Texto alineado al centro */}
        <p className="mb-0 text-center flex-grow-1" style={{ fontSize: '0.9rem' }}>
          Dirección de relaciones estudiantiles - Universidad Técnica Federico Santa María
        </p>
      </div>
    </footer>
  )
}

export default Footer
