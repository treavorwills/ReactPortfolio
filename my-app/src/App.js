import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom"
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects.js';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {

  console.log("hello");

  return (
    <div class="">
      <NavBar />
    <Routes>
      <Route path="/ReactPortfolio" element={<Home />} />
      <Route path="/ReactPortfolio/about" element={<About />} />
      <Route path="/ReactPortfolio/projects" element={<Projects />} />
      <Route path="/ReactPortfolio/contact" element={<Contact />} />
      <Route path="/ReactPortfolio/resume" element={<Resume />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
