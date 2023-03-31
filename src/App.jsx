import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "./pages/Carouselcomp";
import Header from "./pages/Header"

function App() {
 

  return (
    <div className="App">
      <div>
      <Header />
       <Carousel />
       </div>
       </div>
  )
}

export default App
