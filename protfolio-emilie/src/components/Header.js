import React from "react";


function Header() {
  return (
    <header className="modern-header">
      <div className="header-overlay"></div>
      
      <div className="header-content">
        <div className="brand-container">
          <span className="brand-subtitle">PORTFOLIO</span>
          <h1 className="main-title">EMILIE L'HER</h1>
        </div>
        
        <p className="tagline">
          Créez des objectifs positifs dans votre vie &<br />
          <em className="tagline-emphasis">atteignez-les aussi heureux que possible</em>
        </p>
      </div>

      {/* Images flottantes positionnées */}
      <div className="floating-images">
        <div className="cert-image cert-1">
          <img src="/images/cert1.jpg" alt="Certification 1" />
        </div>
        <div className="cert-image cert-2">
          <img src="/images/cert2.jpg" alt="Certification 2" />
        </div>
        <div className="cert-image cert-3">
          <img src="/images/cert3.jpg" alt="Certification 3" />
        </div>
        <div className="cert-image cert-4">
          <img src="/images/book1.jpg" alt="Document 1" />
        </div>
        <div className="cert-image cert-5">
          <img src="/images/book2.jpg" alt="Document 2" />
        </div>
      </div>
    </header>
  );
}

export default Header;