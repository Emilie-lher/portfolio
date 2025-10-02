import React, { useState } from "react";
import emailjs from "emailjs-com";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_a1g66jq",      // à remplacer
        "template_0t63ni4",     // à remplacer
        formData,
        "58HeGdYGJp83jREu3"        // à remplacer
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          setError(false);
          setFormData({ name: "", email: "", message: "" }); // reset
        },
        (error) => {
          console.error(error.text);
          setError(true);
        }
      );
  };

  return (
    <section className="contact-section">
      <h2>Contact</h2>
      {submitted ? (
        <p className="success-message">
          ✅ Merci {formData.name || "!"}, ton message a bien été envoyé.
        </p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Envoyer</button>
          {error && <p style={{ color: "red" }}>❌ Une erreur est survenue.</p>}
        </form>
      )}
    </section>
  );
}

export default Contact;
