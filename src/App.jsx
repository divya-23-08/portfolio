import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Skills from './modules/skills';
import Contact from './modules/contact';

function App() {
  
  return (
    
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Contacts" element={<Contacts />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    
  );
}

export default App
