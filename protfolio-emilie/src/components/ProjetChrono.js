import React from "react";
import { ArrowRight } from "lucide-react"; // icône flèche
import etape1 from "../assets/userstory.JPG";
import etape2 from "../assets/accueil.PNG";
import etape4 from "../assets/accueil.JPG";

function ProjetChrono() {
  const steps = [
    {
      titre: "Analyse du besoin",
      description:
        "Étude du cahier des charges et identification des fonctionnalités clés à développer avec le client. Calcul des coûts d'hébergement.",
      image: etape1,
    },
    {
      titre: "Conception du produit",
      description:
        "Création des maquettes, choix de la technologie, mise en place de l’environnement de travail.",
      image: etape2,
    },
    {
      titre: "Développement",
      description:
        "Développement progressif des fonctionnalités principales et intégration des tests en CodeIgniter 3.",
    },
    {
      titre: "Livraison & Bilan",
      description:
        "Présentation du produit final, retour du tuteur et des utilisateurs pour une amélioration continue.",
      image: etape4,
    },
  ];

  return (
    <section className="projet-chrono">
      <h2>Détail de la mise en pratique du stage pour une association</h2>
      <div className="timeline">
        {steps.map((step, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              {step.image && (
                <img src={step.image} alt={step.titre} className="timeline-img" />
              )}
              <div className="timeline-text">
                <h3>{step.titre}</h3>
                <p>{step.description}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <span className="timeline-line">
                <ArrowRight size={28} />
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjetChrono;
