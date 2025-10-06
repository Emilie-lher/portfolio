import React from "react";
import git from "../assets/git.png";
import osm from "../assets/osm.png";
import site from "../assets/marché.png";
const experiences = [
   { 
    denom: "DevSecOps", 
    title: "Alternance  Thales (1 an)", 
    desc: "Mettre en place un appartement témoin sur GitLab. Mon objectif est de déployer des projets dans différents langages en intégrant les pipelines CI/CD et tests unitaires de chaque langage pour servir de témoins. J'ai pu configurer un pipeline GitLab, développer des tests en C++ avec Google Test. Le résultat attendu est que j'ai créé un environnement témoin fonctionnel automatisant la compilation et les tests pour être déployé sur différents réseaux internes. Le défi est que l’automatisation apporte rapidité et sécurité, mais exige rigueur et maîtrise des outils, et surtout il doit pouvoir être compatible sur différents réseaux organisés différemment.", 
    tags: ["GitLab", "Pipeline", "C++", "Google Test"],
    img: git
  },
  { 
    denom: "Développeur création et design de feuille de style", 
    title: "Stage Thales (5 mois)", 
    desc: "L’enjeu de ce projet était d’enrichir le serveur cartographique avec de nouveaux styles vectoriels. Mon objectif était de créer des styles conformes à la norme SLD et optimisés pour le serveur. J'ai pu concevoir et tester des feuilles de style, développer un outil Python de débogage. Grâce à mes tests, les nouveaux styles ont été intégrés avec compatibilité et une bonne performance d’affichage. Le  souci rencontré a été que l'outil utilisé sur le serveur cartographie avait plus de restrictions sur le sld que le logiciel QGIS. Cela m'a donc obligé à créer 2 versions de mes fichiers de style au cas où ils changeraient de version sur le serveur ", 
    tags: ["SLD", "Python", "QGIS"],
    img: osm
  },
  { 
    denom: "Développeur Web", 
    title: "Stage Association (7 semaines)", 
    desc: "Créer un site pour gérer les inscriptions d’artisans. J'ai pu concevoir un site fonctionnel et validé par le client. Pour cela j'ai conçu le design et défini les fonctionnalités, développé et mis en ligne le site. Le site est opérationnel et utilisé par les artisans pour s’inscrire.  Cela m'a appris que le retour des utilisateurs soit important pour réaménager le site au besoin.", 
    site: "https://www.tregastelbourg.fr/",
    tags: ["SQL", "MariaDB", "CodeIgniter 3"] ,
    img: site
  },
   { 
    denom: "Développeur Web/BD", 
    title: "Stage IUT Lannion (5 semaines)", 
    desc: "Créer des comptes temporaires pour les nouveaux arrivants le temps d'avoir leurs comptes officiels. Pour cela, il fallait automatiser la vérification et la création des comptes. J'ai donc dû comparer les données entre bases, développer une interface web. L'application n'était pas terminée à mon départ, il m'aurait fallu plus d'expérience pour la finaliser et plus de temps.", 
    tags: ["PHP", "JavaScript", "SQL"] 
  },
  { 
    denom: "Développeur Scratch / Arduino", 
    title: "Stage Orange (1 semaine)", 
    desc: "Concevoir un outil ludique pour aider les personnes avec  des prothèse. Mon objectif était de créer un jeu interactif sur Scratch intégré à un système Arduino utilisable via un joystick. Pour cela j'ai développé un mini-jeu adapté à l’interface Arduino.Le jeu est fonctionnel et  testable avec joystick. POur cela il a été important de comprendre la problématique physique des utilisateurs", 
    tags: ["Scratch", "Arduino"] 
  }

 

  

  

 



];

function Experiences() {
  return (
    <section>
      <h2>Expériences</h2>
      <div className="experience-grid">
        {experiences.map((exp, idx) => (
          <div className="experience-card" key={idx}>
   {exp.img && (
              <div className="experience-img">
                <img src={exp.img} alt={exp.denom} />
              </div>
            )}
  <h2>{exp.denom}</h2>
  <h3>{exp.title}</h3>
  <p>{exp.desc}</p>
  {exp.site && (
    <p>
      <a href={exp.site} target="_blank" rel="noopener noreferrer">
        {exp.site}
      </a>
    </p>
  )}
  <div className="tags">
    {exp.tags.map((tag, i) => (
      <span className="tag" key={i}>{tag}</span>
    ))}
  </div>
</div>

        ))}
      </div>



    </section>
  );
}

export default Experiences;
