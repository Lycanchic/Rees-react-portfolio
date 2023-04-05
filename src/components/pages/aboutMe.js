import React from 'react';
import Navbar from './navbar';
import meInBlack from '../../assets/images/meInBlack.jpg';
import Footer from './footer'
import '../../assets/css/aboutMe.css';

function AboutMe() {
  return (
    <div>
      <Navbar />
      <img src={meInBlack} alt="meInBlackShirt" className="meInBlack" /> 
      <h1>Hello I'm Marie</h1>
      <p>Hi, my name is Marie and I am a Fullstack Web Developer.</p>
      <p>I have my fullstack certification from UCD and my UX/UI Design certification from Coursera. I love to create and design, I look forward to the next chapter of my life and the fun challenges that may come with it.</p>
      <p>I hope to hear from you, you can get in touch with me by clicking on the icons in the footer. Thanks for stopping by!</p>
      <Footer /> 
    </div>
  );
}

export default AboutMe;