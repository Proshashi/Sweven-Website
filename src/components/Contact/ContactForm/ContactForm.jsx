import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    to_name: "Sweven Incorporate",
  });

  // eslint-disable-next-line
  const [error, setError] = useState({
    status: false,
    messsage: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let tempelateParam = formData;
    emailjs
      .send(
        "gmail",
        "template_JjrsgHhz",
        tempelateParam,
        "user_HQ0PmdmmQMzYP9jrVNmK0"
      )
      .then(() => {
        console.log("sent");
        setFormData({
          ...formData,
          name: "",
          email: "",
          description: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fade left delay={800}>
      <div className="__sweven_contact-form">
        <form action="" onSubmit={handleSubmit}>
          <div className="__sweven_contact-form--heading">Get in touch</div>
          <input
            type="text"
            id="name"
            placeholder="Full name"
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            onChange={handleChange}
            value={formData.email}
          />
          <textarea
            id="description"
            placeholder="Message"
            onChange={handleChange}
            value={formData.description}
          />
          {error ? <div>{error.messsage}</div> : null}
          <button type="submit">Send</button>
        </form>
      </div>
    </Fade>
  );
};

export default ContactForm;
