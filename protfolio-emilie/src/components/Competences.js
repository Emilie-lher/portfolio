function Competences() {
  const categories = [
    {
      title: "Langages",
      items: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Python", "Go", "Java", "Kotlin", "C" ,"C++","C#" ,"SLD"],
    },
    {
      title: "Frameworks & Librairies",
      items: ["CodeIgniter 3 & 4", "Symfony", "Xamarin","React", "Node.js", "QGIS" , "Google test","Junit"],
    },
    {
      title: "Outils",
      items: ["Eclipse", "VS Code", "Github", "Gradle","Gitlab", "Git", "Intellij" ,"MariaDb"],
    },
  ];

  return (
    <section>
      <h2>Compétences</h2>

      {categories.map((cat) => (
        <div key={cat.title} className="competence-section">
          <h3>{cat.title}</h3>
          <div className="competence-grid">
            {cat.items.map((item) => (
              <div key={item} className="competence-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Competences;
