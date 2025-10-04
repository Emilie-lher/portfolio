import React from "react";
import Header from "./components/Header";
import Profil from "./components/Profil";
import Navigation from "./components/Navigation";
import Competences from "./components/Competences";
import Contact from "./components/Contact";
import Formations from "./components/Formation";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />

      {/* Chaque section reçoit un id qui correspond au href de la navbar */}
      <header id="header">
        <Header />
      </header>
 <section id="Profil">
        <Profil />
      </section>
      <section id="competences">
        <Competences />
      </section>

      <section id="experiences">
        <Experiences />
      </section>

      <section id="formation">
        <Formations />
      </section>

      <section id="contact">
       
    <div>
      <Contact />
    </div>
  
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
