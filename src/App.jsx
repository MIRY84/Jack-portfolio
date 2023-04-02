import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Opere from './pages/Opere'
import Header from "./pages/Header"
import { Container } from 'react-bootstrap';
import Navbar from "./Components/Navbar";
import Stripe from "./Components/Stripe";
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Contact from './pages/Contact'

function App() {
 

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opere" element={<Opere />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      
    
    </>
       
  )
}

export default App
