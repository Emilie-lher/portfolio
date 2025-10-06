import React, { useState } from "react";
import profilePic from "../assets/attestation_secnumacademie-1.png";
import bac from "../assets/Bac Emilie-1.png";
import pix from "../assets/attestation-pix-20210204(1)-1.png";

function Header() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (img) => setSelectedImage(img);
  const closePopup = () => setSelectedImage(null);

  return (
    <header className="modern-header">
      <div className="header-overlay"></div>

      <div className="header-content">
        <div className="brand-container">
          <span className="brand-subtitle">PORTFOLIO</span>
          <h1 className="main-title">EMILIE L'HER</h1>
        </div>

        
      </div>

      {/* Images flottantes cliquables */}
      <div className="floating-images">
        <div className="cert-image cert-1" onClick={() => openImage(profilePic)}>
          <img src={profilePic} alt="attestation_secnumacademie" />
        </div>
        <div className="cert-image cert-2" onClick={() => openImage(bac)}>
          <img src={bac} alt="bac" />
        </div>
        <div className="cert-image cert-3" onClick={() => openImage(pix)}>
          <img src={pix} alt="pix" />
        </div>
      </div>

      {/* ✅ Popup d'image agrandie */}
      {selectedImage && (
        <div className="image-popup" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>
            <img src={selectedImage} alt="certificat agrandi" />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
