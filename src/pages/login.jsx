import React, { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom'; // Solo si usas React Router
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/login.css'; // Para los estilos en línea, que te muestro abajo

const Login = () => {
  const { login } = useAuth();
   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Solo si usas React Router

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.endsWith('@usm.cl')) {
      alert('Por favor, ingresa un correo válido que termine en @usm.cl');
      return;
    }

    // ✅ Redirección
    login();
    navigate('/');// O `navigate('/prototipo')` si usas rutas de React
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
