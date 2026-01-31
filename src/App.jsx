import { useState } from 'react'

import './App.css'
import Footer from"./components/Footer";
import Navbar from"./components/Navbar";

import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Skills from './modules/skills';
import Contact from './modules/contact';
import { Login } from '@mui/icons-material';
import Register from './modules/register';

function App() {
  const isAuthenticated=localStorage.getItem("token");
  console.log("isauthenticated",isAuthenticated);
  return (
    <BrowserRouter>
      {/* {isAuthenticated ? ( */}
        <>
          <Navbar />

          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Skills" element={<Skills />}></Route>
            <Route path="/Projects" element={<Projects />}></Route>
            <Route path="/Contacts" element={<Contacts />}></Route>
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
          <Footer />
        </>
      {/* // ) : ( */}
      //   <Routes>
      //     <Route path="/" element={<Login />}></Route>
      //     <Route path="/register" element={<Register />}></Route>
      //   </Routes>
      {/* // )} */}
    </BrowserRouter>
  );
}

export default App
