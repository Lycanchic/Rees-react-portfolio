import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import ContactMe from './components/pages/contactMe';
import UxUi from './components/pages/uxUi';
import AboutMe from './components/pages/aboutMe';
import Projects from './components/pages/projects';
import Photography from './components/pages/photography';
import Nature from './components/pages/nature';
import Photoevents from './components/pages/photoevents';


function App() {
  return (
    <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ContactMe" element={<ContactMe />} />
            <Route path="/uxUi" element={<UxUi />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/nature" element={<Nature />} />
            <Route path="/photoevents" element={<Photoevents />} />
            </Routes>
    </div>
    </Router>
  );
}

export default App;
