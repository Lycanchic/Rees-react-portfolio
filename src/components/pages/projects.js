import React, { useState } from 'react';
import Navbar from './navbar';
import Hheventsweoffer from '../../assets/gif/hheventsweoffer.gif';
import HootenannyHero from '../../assets/gif/HootenannyHero.gif';
import HootenannyHero2
 from '../../assets/gif/HootenannyHero2.gif';
import MERNBookSearchSS from '../../assets/images/projects/MERNBookSearchSS.png';
import Login from '../../assets/images/projects/Login.png';
import logout from '../../assets/images/projects/logout.png';
import Fig4 from '../../assets/images/UxUi/fig4.png';
import Fig5 from '../../assets/images/UxUi/fig5.png';
import Fig6 from '../../assets/images/UxUi/fig6.png';
//import B1 from '../../assets/images/UxUi/b1.png';
import B2 from '../../assets/images/UxUi/b2.png';
import B3 from '../../assets/images/UxUi/b3.png';
import B4 from '../../assets/images/UxUi/b4.png';
import B5 from '../../assets/images/UxUi/b5.png';

import Footer from './footer'
import '../../assets/css/projects.css';

const UxUi = () => {
    const [enlargedImg, setEnlargedImg] = useState(null);
  
    // state to show/hide the modal
    const [showModal, setShowModal] = useState(false); 
  
    // function to close the modal and reset enlarged image state
    const handleCloseModal = () => {
      setEnlargedImg(null);
      setShowModal(false);
    };
 
  return (
    <div>
    <Navbar />
    <h1>My Recent Projects</h1>
   
     <h2>Hootenany Hero</h2>   
    
    <div className="flex-container">
          <div className="flex-item">
        <img src={Hheventsweoffer} alt="Hheventsweoffer gif" className="ux-ui-image fig-size"/>
      </div>
      <div className="flex-item">
        <img src={HootenannyHero} alt="HootenannyHero gif" className="ux-ui-image fig-size"/>
      </div>
  
      <div className="flex-item">
        <img src={HootenannyHero2} alt="HootenannyHero gif" className="ux-ui-image fig-size"/>
      </div>
      </div>
      <h2>MERN Book Search</h2>
      <div className="flex-container">
        <div className="flex-itemw">
          <img
            src={MERNBookSearchSS}
            alt="MERNBookSearchSS"
            className="ux-ui-image fig-size"/>
        </div>
        <div className="flex-itemw">
          <img
            src={Login}
            alt="login"
            className="ux-ui-image fig-size"/>
        </div>
        <div className="flex-itemw">
          <img
            src={logout}
            alt="logout"
            className="ux-ui-image fig-size"/>
        </div>
        </div>
        <h2>Final Output for both</h2>
        <div className="flex-itemw">
          <img
            src={Fig4}
            alt="Fig4"
            className="ux-ui-image fig-size"/>
        </div>
        <div className="flex-itemw">
          <img
            src={Fig5}
            alt="Fig5"
            className="ux-ui-image fig-size"/>
        </div>
        <div className="flex-itemw">
          <img
            src={Fig6}
            alt="Fig6"
            className="ux-ui-image fig-size"/>
        </div>
      
  
    <h2>Final Output for both</h2>

      
      <div className="flex-item">
        <img src={B2} alt="b2" className="ux-ui-image fig-size"/>
      </div>
      <div className="flex-itemw">
        <img src={B3} alt="b3"className="ux-ui-image fig-size"/>
      </div>
      <div className="flex-itemw">
        <img src={B4} alt="b4" className="ux-ui-image fig-size"/>
      </div>
      <div className="flex-item">
        <img src={B5} alt="b5" className="ux-ui-image fig-size"/>
      </div>
  

   {/* Modal for enlarged image */}
   {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={enlargedImg} alt="Enlarged" className="enlarged-image" />
          </div>
        </div>
      )}
  
    <Footer />
  </div>
  );
}

export default UxUi;