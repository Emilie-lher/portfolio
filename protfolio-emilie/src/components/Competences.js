function Competences() {
  const categories = [
    {
      title: "Langages",
      items: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Python", "Go", "Java", "Kotlin", "C/C++/C#"],
    },
    {
      title: "Frameworks",
      items: ["CodeIgniter 3 & 4", "Symfony", "Xamarin"],
    },
    {
      title: "Outils",
      items: ["Eclipse", "VS Code", "Git", "Gradle"],
    },
  ];

  return (
    <section id="competences">
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
