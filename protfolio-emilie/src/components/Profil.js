import React from "react";
import profilePic from "../assets/photocv.jpg";


function Profil() {
  return (
    <section className="profil-section" id="profil">
      <h2 className="section-title">À propos de moi</h2>

      <div className="profil-card">
        {/* Colonne gauche : image */}
        <div className="profil-image">
          <img src={profilePic} alt="Photo de profil" />
        </div>

        {/* Colonne droite : texte + infos */}
        <div className="profil-content">
          <p className="profil-intro">
            Je suis quelqu’un d’appliquée, d’organisée et rigoureuse. 
            J’aime travailler en équipe et apprendre. 
            J’ai de bonnes compétences en gestion de projets.
          </p>

          <div className="profil-info">
            <h3>Informations personnelles</h3>
            <ul>
              <li>📞 07 69 16 34 30</li>
              <li>📧 <a href="mailto:emilielher@laposte.net">emilielher@laposte.net</a></li>
              <li>🔗 <a href="https://www.linkedin.com/in/emilie-lher" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li>📍 22730 Trégastel</li>
              <li>🚗 Permis B (voiture)</li>
            </ul>
          </div>

          <div className="profil-skills">
            <h3>Compétences</h3>
            <div className="skill-tags">
              <span className="tag">Organisation</span>
              <span className="tag">Travail en équipe</span>
              <span className="tag">Gestion de projets</span>
              <span className="tag">Apprentissage rapide</span>
            </div>
          </div>

          <div className="profil-hobbies">
            <h3>Loisirs</h3>
            <div className="hobby-tags">
              <span className="tag">🎶 Chant choral</span>
              <span className="tag">🎨 Dessin</span>
              <span className="tag">✂️ Couture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profil;
