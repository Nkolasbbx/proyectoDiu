import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'
import ServiciosPage from '../pages/servicios'
import BeneficiosPage from '../pages/beneficios'
import ContactoPage from '../pages/contacto'
import QuienesSomosPage from '../pages/quienesSomos'
import Login from '../pages/login'
import AgendarHora from '../pages/agendarHora'
import Solicitudes from '../pages/Solicitudes'
import Antecedentes from '../pages/Antecedentes'
import MiPerfil from '../pages/miPerfil'

import NavBar from '../components/nav_bar'
import Footer from './footer'

// ⬇️ Importa el AuthProvider
import { AuthProvider } from '../context/authContext'
import TNE from '../pages/TNE'
import PublicacionesPage from '../pages/publicaciones'

const Layout = () => {
  return (
    <BrowserRouter>
      {/* ⬅️ Envuelve toda la aplicación con AuthProvider */}
      <AuthProvider>
        <div className='layout'>
          <NavBar />
          <div className='layout__page'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/lightbulb' element={<LightbulbPage />} />
              <Route path="/servicios" element={<ServiciosPage />} />
              <Route path="/beneficios" element={<BeneficiosPage />} />
              <Route path="/contacto" element={<ContactoPage />} />
              <Route path="/publicaciones" element={<PublicacionesPage />} />
              <Route path="/quienesSomos" element={<QuienesSomosPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/agendarHora" element={<AgendarHora />} />
              <Route path="/Antecedentes" element={<Antecedentes />} />
              <Route path="/Solicitudes" element={<Solicitudes />} />
              <Route path="/TNE" element={<TNE />} />
              <Route path="/miPerfil" element={<MiPerfil />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}
export default Layout