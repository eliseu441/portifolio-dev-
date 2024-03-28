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
import Aos from 'aos';
import 'aos/dist/aos.css';
import Preloader from "./layout/preLoader/Preloader.jsx";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // callApis()
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    Aos.init({ once: true });
}, []);
  return (
    
    <Router>
       
      <Header/>
      {isLoading ? <Preloader /> : (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
      </Routes>)}
    </Router>
  );
}

export default App;
