import React from 'react'
import Blog from './pages/Blog';
import Client from './pages/Client';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Navbar from './pages/Navbar'
import StepContainer from './pages/StepContainer';
import Team from './pages/Team';
import Vendor from './pages/Vendor';
import "./styles/main.css";


function App() {
  return (
    <>
           <Navbar/>
           <Home/>
           <StepContainer/>
           <Vendor/>
           <Client/>
           <Team/>
           <Contact/>
           <Blog/>
           <Footer/>
    </>
  )
}

export default App
