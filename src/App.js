import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './layout/Header2/index.jsx';
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects.jsx'
import Experience from './pages/Experience/Experience.jsx'
import HomeMobile from './pages/HomeMobile/HomeMobile.jsx'
import ProjectsMobile from './pages/ProjectsMobile/ProjectsMobile.jsx'
import ExperienceMobile from './pages/ExperienceMobile/ExperienceMobile.jsx'
import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {
  
  useEffect(() => {
    // callApis()
    Aos.init({ once: true });
}, []);
  return (
    <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/homeMobile" element={<HomeMobile />} />
          <Route path="/ProjectsMobile" element={<ProjectsMobile />} />
          <Route path="/experienceMobile" element={<ExperienceMobile />} />
      </Routes>
    </Router>
  );
}

export default App;
