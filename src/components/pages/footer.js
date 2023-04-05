import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
//import { faHeroku } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import '../../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__icons">
      <Link to="https://github.com/lycanchic" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link to="mailto:map40j@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
        <Link to="https://www.linkedin.com/in/map2023/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;