import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNav from './components/Navbar';
import { Home, Contact, ProjectGallery, Custom404 } from './components/Pages';
import './App.css'

function App() {
  return (

    <Router basename={'/react-portfolio'}>
      <MyNav />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/portfolio' element={<ProjectGallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/404' element={<Custom404 />} />

      </Routes>
    </Router>


  )
}

export default App
