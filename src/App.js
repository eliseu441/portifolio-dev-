import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './layout/header/Header'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects.jsx'
import Experience from './pages/Experience/Experience.jsx'
import SideNavBar from './layout/sidebar/SideNavBar';
import HomeMobile from './pages/HomeMobile/HomeMobile.jsx'
import ProjectsMobile from './pages/ProjectsMobile/ProjectsMobile.jsx'
import ExperienceMobile from './pages/ExperienceMobile/ExperienceMobile.jsx'


function App() {
  return (
    <Router>
      <Header/>
      <SideNavBar/>
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
