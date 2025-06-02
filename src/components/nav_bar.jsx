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
      navigate('/agendarHora');
    } else {
      alert('Debes iniciar sesión para solicitar una hora.');
    }
  }

  const handleLogout = () => {
    logout();
    navigate('/');
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
              <NavLink to="/" className={navLinkClass}>Página principal</NavLink>
            </li>
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
              <a href="#" className="nav-link" onClick={handleSolicitarHora}>Solicitar hora</a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2">
            <NavLink to="/Antecedentes" className="btn btn-outline-light">Antecedentes socioeconómicos</NavLink>
            <NavLink to="/Solicitudes" className="btn btn-outline-light">Solicitudes/postulaciones</NavLink>
            <NavLink to="/TNE" className="btn btn-outline-light">TNE</NavLink>

            {isLoggedIn ? (
              <button className="btn btn-outline-light ms-3" onClick={handleLogout}>
                <i className="bi bi-box-arrow-right me-2"></i> Cerrar sesión
              </button>
            ) : (
              <NavLink to="/login" className="btn btn-warning fw-bold ms-3">Login</NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
