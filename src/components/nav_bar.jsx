import React from 'react'
import '../stylesheets/NavBar.scss'
import { useAuth } from '../context/authContext';
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

export const NavBar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleSolicitarHora = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      navigate('/agendarHora'); // Ruta de la vista "Solicitar hora"
    } else {
      alert('Debes iniciar sesión para solicitar una hora.');
    }
  }

  const handleLogout = () => {
    logout();
    navigate('/');  // Redirige a la página principal después de cerrar sesión
  }

  const navLinkClass = ({ isActive }) =>
    `nav-link${isActive ? ' active fw-bold' : ''}`

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom px-4 py-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Logo" height="40" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/quienesSomos" className={navLinkClass}>Quienes somos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/publicaciones" className={navLinkClass}>Publicaciones</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacto" className={navLinkClass}>Contacto</NavLink>
            </li>
            <li className="nav-item">
              {/* Aquí el link de solicitar hora */}
              <a href="#" className="nav-link" onClick={handleSolicitarHora}>Solicitar hora</a>
            </li>
          </ul>
          {isLoggedIn ? (
            <button className="btn btn-outline-light" onClick={handleLogout}>
              <i className="bi bi-box-arrow-right me-2"></i> Cerrar sesión
            </button>
          ) : (
            <NavLink to="/login" className="btn btn-warning fw-bold">Login</NavLink>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
