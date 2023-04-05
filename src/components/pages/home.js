import React from 'react';
import Navbar from './navbar';
import '../../assets/css/home.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
//import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
//import { Link } from 'react-router-dom'; 
import Footer from './footer'

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="content">
        <h1>Welcome to my website!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut
          sapien vel elit porta blandit vel a nulla. Mauris ut urna vel enim
          consectetur scelerisque in ut est. Duis vel ultricies nulla, eu
          lacinia nisi. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Fusce bibendum erat non nisl rutrum,
          a elementum mauris aliquam.
        </p>
        <Footer />
      </div>
    </div>
  );
}


export default Home;