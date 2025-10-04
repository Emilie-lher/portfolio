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
            Je suis quelqu’un d’appliquée, d’organisée et rigoureuse. J'ai pu développer mes compétences en travail d'équipe
             Lors de mes différents stages, emplois d’été et bénévolat.
              <br></br>
           Mes stages en
             entreprise m'ont permis de mettre en pratique mes compétences techniques et de développer mes capacités
              d'adaptation et de communication avec des collègues et d'approfondir mes connaissances dans les outils de gestion 
              Surtout lié à mon alternance GitLab. 
              <br></br>
              Cependant, mon engagement le plus significatif est mon rôle de bénévole dans 
              une association locale. Mon travail consiste à
        placer les artisans le jour du marché en fonction des besoins de chacun dans un espace réduit et gérer 
        la communication ainsi que le maintien du site web  </p>

          <div className="profil-info">
            <h3>Informations personnelles</h3>
            <ul>
              <li>📞 07 69 16 34 30</li>
              <li>📧 <a href="mailto:emilielher@laposte.net">emilielher@laposte.net</a></li>
              <li>🔗 <a href="https://www.linkedin.com/in/emilie-lher-5855a3226/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li>📍 29200 Brest</li>
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
              <span className="tag">🎶 Choral</span>
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
