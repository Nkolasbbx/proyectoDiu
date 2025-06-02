import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'
import ServiciosPage from '../pages/servicios'
import BeneficiosPage from '../pages/beneficios'
import ContactoPage from '../pages/contacto'
import QuienesSomosPage from '../pages/quienesSomos'

import NavBar from '../components/nav_bar'
import Footer from './footer'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
            <Route path="/servicios" element={<ServiciosPage />} />
            <Route path="/beneficios" element={<BeneficiosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/quienesSomos" element={<QuienesSomosPage />} />
            
            
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default Layout
