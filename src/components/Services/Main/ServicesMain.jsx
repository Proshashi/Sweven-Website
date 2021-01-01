import React from "react";
import Anime from "react-anime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ServicesMain = () => {
  return (
    <div className="__sweven_services-main">
      <div className="__sweven_services-main--description">
        <div className="__sweven_services-main--description__heading">
          <Anime opacity={[0, 1]} translateX={[50, 0]} delay={1000}>
            <div>
              <span>Brand </span>
              <span>with </span>
              <span>Love</span>
            </div>
          </Anime>
        </div>
        <Anime opacity={[0, 1]} translateY={[50, 0]} delay={1000}>
          <div className="__sweven_services-main--description__body">
            Sweven Incorporate Private Limited is walking and pour a dream of
            digitalization Nation and world
          </div>
        </Anime>
        <Anime opacity={[0, 1]} scale={[0, 1]} delay={1000}>
          <div className="__sweven_services-main--description__button">
            <Link to="/contact-us">
              Contact Us &nbsp; <FontAwesomeIcon icon={faPhone} />
            </Link>
          </div>
        </Anime>
      </div>
    </div>
  );
};

export default ServicesMain;
