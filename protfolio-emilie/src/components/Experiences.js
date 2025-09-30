import React from "react";

const experiences = [
  { title: "Stage chez Orange", desc: "Programmation Arduino (Scratch)", tags: ["#stage", "Arduino"] },
  { title: "Développement Web (IUT Lannion)", desc: "PHP, JavaScript, SQL", tags: ["#dev", "Web"] },
  { title: "Comité des fêtes de Trégastel", desc: "Site en CodeIgniter 3", tags: ["#projet", "CodeIgniter"] },
  { title: "Stage chez Thales", desc: "Feuilles de style (SLD)", tags: ["#stage", "SLD"] },
  { title: "Emplois saisonniers", desc: "Encadrement d’équipes, aide à la personne", tags: ["#emploi", "management"] },
];

function Experiences() {
  return (
    <section>
      <h2>Expériences</h2>
      <div className="experience-grid">
        {experiences.map((exp, idx) => (
          <div className="experience-card" key={idx}>
            <h3>{exp.title}</h3>
            <p>{exp.desc}</p>
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
