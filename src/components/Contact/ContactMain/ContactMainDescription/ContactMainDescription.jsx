import React from "react";
import Anime from "react-anime";
import { Link } from "react-router-dom";

const ContactMainDescription = () => {
  return (
    <div className="__sweven_contact-main--description">
      <div className="__sweven_contact-main--description__heading">
        <span className="red">
          <Anime translateX={[20, 0]} opacity={[0, 1]} delay="1200">
            Contact us
          </Anime>
        </span>
        <br />

        <span className="green">
          <Anime translateX={[20, 0]} opacity={[0, 1]} delay="1400">
            OR
          </Anime>
        </span>
        <br />
        <span className="blue">
          <Anime translateX={[20, 0]} opacity={[0, 1]} delay="1400">
            Become a part of this
          </Anime>
        </span>
        <br />
        <span className="blue">
          <Anime translateX={[20, 0]} opacity={[0, 1]} delay="1400">
            community
          </Anime>
        </span>
      </div>

      <div className="__sweven_contact-main--description__signUp">
        <Anime
          opacity={[0, 1]}
          delay="1000"
          easing="easeOutCirc"
          translateY={[50, 0]}
        >
          <Link to="/contact-us">Join the community</Link>
        </Anime>
      </div>
    </div>
  );
};

export default ContactMainDescription;
