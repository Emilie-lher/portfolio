import React from "react";

const Navigation = () => {
  return (
    <nav className="navbar">
      
      {/* Liens */}
      <ul className="nav-links">
        <li><a href="#Profil">Profil</a></li>
        <li><a href="#competences">Compétences</a></li>
        <li><a href="#experiences">Expériences</a></li>
        <li><a href="#formation">Formation</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
