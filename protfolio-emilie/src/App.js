import React from "react";
import Header from "./components/Header";
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
      <Navigation/>
      <Header />
      <Competences />
      <Contact />
      <Formations />
      <Experiences />
      <Footer />

      
    </div>
  );
}

export default App;
