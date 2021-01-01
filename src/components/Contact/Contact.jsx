import React from "react";
import ContactInformation from "./ContactInformation/ContactInformation";
import ContactForm from "./ContactForm/ContactForm";
import ContactMain from "./ContactMain/ContactMain";

const Contact = () => {
  return (
    <div className="__sweven_contact">
      <ContactMain />
      <div className="__sweven_contact-info">
        <ContactForm />
        <ContactInformation />
      </div>
    </div>
  );
};

export default Contact;
