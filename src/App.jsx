import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "./pages/Carouselcomp";
import Header from "./pages/Header"
import { Container } from 'react-bootstrap';

function App() {
 

  return (
    <div className="App">
      
      <Container />
      <Header />
       <Carousel />
       </div>
       
  )
}

export default App
