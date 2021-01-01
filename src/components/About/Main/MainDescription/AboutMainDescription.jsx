import React from "react";
import { Link } from "react-router-dom";
import Anime from "react-anime";

const AboutMainDescription = () => {
  return (
    <div className="__sweven_about-main--description">
      <div className="__sweven_about-main--description__heading">
        <Anime translateX={[50, 0]} opacity={[0, 1]} delay={1500}>
          <div>
            <span>What </span>
            <span>do we do</span>
            <span>?</span>
          </div>
        </Anime>
      </div>
      <Anime opacity={[0, 1]} delay={1000}>
        <div className="__sweven_about-main--description__text">
          We love what we do and we do what our clients love & work with great
          clients all over the world to create thoughtful and purposeful
          products.
        </div>
      </Anime>
      <Anime translateY={[10, 0]} opacity={[0, 1]} delay={1800}>
        <div className="__sweven_about-main--description__button">
          <Link to="/contact-us">Become a part</Link>
        </div>
      </Anime>
    </div>
  );
};

export default AboutMainDescription;
