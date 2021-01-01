import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="__sweven_footer">
      <div className="__sweven_footer--description">
        <div className="__sweven_footer--description-write">
          <h2>Write Us</h2>
          <span className="__sweven_footer--description-write_label">
            INQUIRY
          </span>
          <a
            href="mailto:email@swevenincorporate.com.np"
            className="__sweven_footer--description-write_link"
          >
            email@swevenincorporate.com.np
          </a>
        </div>
        <div className="__sweven_footer--description-visit">
          <h2>Visit Us</h2>
          <span className="__sweven_footer--description-visit_label">
            OFFICE
          </span>

          <a href="/" className="__sweven_footer--description-visit_link">
            Sweven Incorporate Private Limited
          </a>
        </div>
        <div className="__sweven_footer--description-call">
          <h2>Call Us</h2>
          <span className="__sweven_footer--description-call_label">
            Mobile
          </span>
          <a
            href="callto:+977-985-707-8186"
            className="__sweven_footer--description-call_link"
          >
            +977-985-707-8186
          </a>
        </div>
        <div className="__sweven_footer--description-follow">
          <h2>Follow Us</h2>
          <div
            style={{ display: "flex", flexDirection: "row", fontSize: "15px" }}
          >
            <a
              href="www.twitter.com"
              className="__sweven_footer--description-follow_link"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ fontSize: "1.5rem" }}
              />
            </a>
            <a
              href="www.facebook.com"
              className="__sweven_footer--description-follow_link"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ fontSize: "1.5rem" }}
              />
            </a>
            <a
              href="www.instagram.com"
              className="__sweven_footer--description-follow_link"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ fontSize: "1.5rem" }}
              />
            </a>
          </div>
        </div>
        <div className="__sweven_footer--description-lists">
          <div>
            <img src="./images/logo.svg" alt="" />
            SWEVEN INCORPORATE
          </div>

          <span>
            Sweven Incorporate Private Limited is a complete digital platform
            company. We serve digital service and we produced innovative product
            as well. We hope public will love us.
          </span>
        </div>
      </div>

      <div className="__sweven_footer--meta">
        <div className="__sweven_footer--meta-logo">
          <img src="./images/logo.svg" alt="" />
        </div>
        <div className="__sweven_footer--meta-copyright">
          Copyright &copy; 2019-2020 all rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
