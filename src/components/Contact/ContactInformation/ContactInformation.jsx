import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import ContactInformationItem from "./ContactInformationItem";
// import ContactForm from "../ContactForm/ContactForm";
import Fade from "react-reveal/Fade";

const contactInfo = [
  {
    title: "Phone",
    icon: <FontAwesomeIcon icon={faPhone} />,
    info: "+977-985-707-8186",
  },
  {
    title: "Email",
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    info: "email@swevenincorporate.com.np",
  },
  {
    title: "Location",
    icon: <FontAwesomeIcon icon={faLocationArrow} />,
    info: "Butwal, Rupandehi",
  },
];

const ContactInformation = () => {
  return (
    <Fade right delay={800}>
      <div className="__sweven_contact-information">
        {/* <div className="__sweven_contact-information--heading">Contact Us</div> */}
        {/* <div className="__sweven_contact-information--description">
        Contact us at the addresses given below.
      </div> */}
        <div className="__sweven_contact-information--lists">
          {contactInfo.map(({ title, icon, info }) => {
            return (
              <ContactInformationItem title={title} icon={icon} info={info} />
            );
          })}
        </div>
        <div className="__sweven_contact-information--social">
          <div className="__sweven_contact-information--social__link">
            <FontAwesomeIcon icon={faFacebookSquare} className="facebookIcon" />
          </div>
          <div className="__sweven_contact-information--social__link">
            <FontAwesomeIcon icon={faTwitterSquare} className="twitterIcon" />
          </div>
          <div className="__sweven_contact-information--social__link">
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className="instagramIcon"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ContactInformation;
