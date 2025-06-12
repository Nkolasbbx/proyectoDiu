import React from 'react';
import '../stylesheets/NavBar.scss';
import { useAuth } from '../context/authContext';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import iconoPerfil from '../assets/icono-perfil.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

export const NavBar = () => {
  const { isLoggedIn, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleSolicitarHora = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      navigate('/agendarHora');
    } else {
      alert('Debes iniciar sesión para solicitar una hora.');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinkClass = ({ isActive }) =>
    `nav-link${isActive ? ' active fw-bold' : ''}`;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom px-4 py-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Logo" height="40" />
        </NavLink>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
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
            {isLoggedIn ? (
              <div className="dropdown">
                <button 
                  className="btn dropdown-toggle d-flex align-items-center gap-2" 
                  type="button" 
                  id="dropdownMenuButton" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                  style={{background: 'transparent', border: 'none'}}
                >
                  <img 
                    src={iconoPerfil} 
                    alt="Perfil" 
                    height="40" 
                    className="rounded-circle"
                  />
                </button>
                
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                  <li>
                    <NavLink className="dropdown-item" to="/miPerfil">
                      Mi perfil
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button 
                      className="dropdown-item text-danger" 
                      onClick={handleLogout}
                    >
                      Cerrar sesión
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <NavLink to="/login" className="btn btn-warning fw-bold ms-3">Login</NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;