import React, { useState } from 'react';
import Navbar from './navbar';
import A1 from '../../assets/images/UxUi/A1.png';
import A2 from '../../assets/images/UxUi/A2.png';
import Fig1
 from '../../assets/images/UxUi/fig1.png';
import Fig2 from '../../assets/images/UxUi/fig2.png';
import Fig3 from '../../assets/images/UxUi/fig3.png';
import Fig4 from '../../assets/images/UxUi/fig4.png';
import Fig5 from '../../assets/images/UxUi/fig5.png';
import Fig6 from '../../assets/images/UxUi/fig6.png';
import B1 from '../../assets/images/UxUi/b1.png';
import B2 from '../../assets/images/UxUi/b2.png';
import B3 from '../../assets/images/UxUi/b3.png';
import B4 from '../../assets/images/UxUi/b4.png';
import B5 from '../../assets/images/UxUi/b5.png';

import Footer from './footer'
import '../../assets/css/uxUi.css';

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
    <h1>Welcome to my most recent Ux/Ui work</h1>
    <p>Example of Adobe</p>
    <div className="flex-container">
      <div className="flex-item">
        <img src={A1} alt="A1" className="ux-ui-image"
       />
      </div>
      <div className="flex-item">
        <img src={A2} alt="A2" className="ux-ui-image"
       />
      </div>
      
      <h2>Example of Figma</h2>
      <div className="flex-container">
        <div className="flex-itemw">
          <img
            src={Fig1}
            alt="Fig1"
            className="ux-ui-image fig-size"
        />
        </div>
        <div className="flex-itemw">
          <img
            src={Fig2}
            alt="Fig2"
            className="ux-ui-image fig-size"
             />
        </div>
        <div className="flex-itemw">
          <img
            src={Fig3}
            alt="Fig3"
            className="ux-ui-image fig-size"
        />
        </div>
        <div className="flex-item">
          <img
            src={Fig4}
            alt="Fig4"
            className="ux-ui-image"
             />
        </div>
        <div className="flex-item">
          <img
            src={Fig5}
            alt="Fig5"
            className="ux-ui-image"
            />
        </div>
        <div className="flex-item">
          <img
            src={Fig6}
            alt="Fig6"
            className="ux-ui-image"
            />
        </div>
      </div>
  
    <h2>Final Output for both</h2>
    <div className="flex-container">
       <div className="flex-item">
        <img src={B1} alt="b1" className="ux-ui-image"
      />
      </div>
      </div>
      <div className="flex-item">
        <img src={B2} alt="b2" className="ux-ui-image"
      />
      </div>
      <div className="flex-item">
        <img src={B3} alt="b3"className="ux-ui-image"
      />
      </div>
      <div className="flex-item">
        <img src={B4} alt="b4" className="ux-ui-image"
       />
      </div>
      <div className="flex-item">
        <img src={B5} alt="b5" className="ux-ui-image"
       />
      </div>
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