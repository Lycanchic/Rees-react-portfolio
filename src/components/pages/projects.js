import React, { useState } from 'react';
import Navbar from './navbar';
import Hheventsweoffer from '../../assets/gif/hheventsweoffer.gif';
import HootenannyHero from '../../assets/gif/HootenannyHero.gif';
import HootenannyHero2
 from '../../assets/images/HootenannyHero2.gif';
import Fig2 from '../../assets/images/fig2.png';
import Fig3 from '../../assets/images/fig3.png';
import Fig4 from '../../assets/images/fig4.png';
import Fig5 from '../../assets/images/fig5.png';
import Fig6 from '../../assets/images/fig6.png';
import B1 from '../../assets/images/b1.png';
import B2 from '../../assets/images/b2.png';
import B3 from '../../assets/images/b3.png';
import B4 from '../../assets/images/b4.png';
import B5 from '../../assets/images/b5.png';

import Footer from './footer'
import '../../assets/css/uxUi.css';

const UxUi = () => {
    const [enlargedImg, setEnlargedImg] = useState(null);
  
    // state to show/hide the modal
    const [showModal, setShowModal] = useState(false); 
  
    // function to handle image click and set enlarged image state
    const handleImageClick = (imgsrc) => {
      setEnlargedImg(imgsrc);
      setShowModal(true);
    };
  
    // function to close the modal and reset enlarged image state
    const handleCloseModal = () => {
      setEnlargedImg(null);
      setShowModal(false);
    };
 
  return (
    <div>
    <Navbar />
    <h1>My Recent Projects</h1>
    <p>Hootenany Hero</p>
    
    <div className="flex-container">
      <div className="flex-item">
        <img src={Hheventsweoffer} alt="A1" className="ux-ui-image"
      />
      </div>
      <div className="flex-item">
        <img src={HootenannyHero} alt="A2" className="ux-ui-image"
       onClick={() => handleImageClick("../../assets/images/A2.png")}  />
      </div>

      <div className="flex-item">
        <img src={HootenannyHero} alt="A2" className="ux-ui-image"
       onClick={() => handleImageClick("../../assets/images/A2.png")}  />
      </div>
      
      <h2>Example of Figma</h2>
      <div className="flex-container">
        <div className="flex-itemw">
          <img
            src={Fig1}
            alt="Fig1"
            className="ux-ui-image fig-size"
       onClick={() => handleImageClick("../../assets/images/fig1.png")}  />
        </div>
        <div className="flex-itemw">
          <img
            src={Fig2}
            alt="Fig2"
            className="ux-ui-image fig-size"
            onClick={() => handleImageClick("../../assets/images/fig2.png")}  />
        </div>
        <div className="flex-itemw">
          <img
            src={Fig3}
            alt="Fig3"
            className="ux-ui-image fig-size"
       onClick={() => handleImageClick("../../assets/images/fig3.png")}  />
        </div>
        <div className="flex-item">
          <img
            src={Fig4}
            alt="Fig4"
            className="ux-ui-image"
            onClick={() => handleImageClick("../../assets/images/fig4.png")}  />
        </div>
        <div className="flex-item">
          <img
            src={Fig5}
            alt="Fig5"
            className="ux-ui-image"
            onClick={() => handleImageClick("../../assets/images/fig5.png")}  />
        </div>
        <div className="flex-item">
          <img
            src={Fig6}
            alt="Fig6"
            className="ux-ui-image"
            onClick={() => handleImageClick("../../assets/images/fig6.png")}  />
        </div>
      </div>
  
    <h2>Final Output for both</h2>
    <div className="flex-container">
      <div className="ux-ui-image"
       onClick={() => handleImageClick("../../assets/images/b1.png")}  />
      </div>
      <div className="flex-item">
        <img src={B2} alt="b2" className="ux-ui-image"
       onClick={() => handleImageClick("../../assets/images/b2.png")}  />
      </div>
      <div className="flex-item">
        <img src={B3} alt="b3"className="ux-ui-image"
       onClick={() => handleImageClick("../../assets/images/b3.png")}  />
      </div>
      <div className="flex-item">
        <img src={B4} alt="b4" className="ux-ui-image"
       onClick={() => handleImageClick("../../assets/images/b4.png")}  />
      </div>
      <div className="flex-item">
        <img src={B5} alt="b5" className="ux-ui-image"
       onClick={() => handleImageClick("../../assets/images/b5.png")}  />
      </div>
    </div>

   {/* Modal for enlarged image */}
   {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={enlargedImg} alt="Enlarged image" className="enlarged-image" />
          </div>
        </div>
      )}
  
    <Footer />
  </div>
  );
}

export default UxUi;