import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/navbar.css';


function Navbar() {
  
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/uxUi">UX/UI</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/photography">Photography</Link></li>
          <li><Link to="/aboutMe">About Me</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
