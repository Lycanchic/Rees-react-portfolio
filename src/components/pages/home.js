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
        <h1>Welcome!</h1>
        <p>
        As a budding developer, I'm thrilled to embark on this journey of coding and creating innovative solutions. With a curious and inquisitive mindset, I'm always eager to learn and be challenged by new technologies and projects. I believe that every coding problem is an opportunity to unlock my creative problem-solving skills and come up with unique and efficient solutions. </p>

{/*<p>I'm passionate about building user-friendly applications that have a positive impact on people's lives. From front-end web development to back-end server-side programming, I'm constantly honing my skills to deliver high-quality and scalable software solutions. I'm also enthusiastic about collaborating with other like-minded individuals and contributing to a team's success.</p>

<p>What sets me apart is my insatiable appetite for learning and my commitment to excellence. I'm not afraid to step out of my comfort zone and explore new technologies, tools, and frameworks to stay ahead of the ever-evolving tech landscape.  </p>

<p>So, whether it's building a responsive web application, optimizing performance, or troubleshooting complex bugs, I'm always up for the challenge. Join me on this exciting journey as I continue to grow, learn, and make my mark in the world of software development.</p>

<p>Let's create something amazing together! Feel free to explore my portfolio and get in touch with me for any collaborations or opportunities. 
  </p>*/}
        <Footer />
      </div>
    </div>
  );
}


export default Home;