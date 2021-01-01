import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Anime from "react-anime";
// import { useMediaQuery } from "react-responsive";

const HomeMainContent = () => {
  //   const isSmallScreen = useMediaQuery({ query: "(max-width: 450px)" });

  return (
    <div className="__sweven_home-main--content">
      <div className="__sweven_home-main--content__title">
        <span>
          <Anime translateX={[20, 0]} opacity={[0, 1]} delay="1200">
            SWEVEN INCORPORATE
          </Anime>
        </span>
        <span>
          <Anime translateX={[20, 0]} opacity={[0, 1]} delay="1400">
            PRIVATE LIMITED
          </Anime>
        </span>
        {/* <span>
          <Anime translateX={[20, 0]} opacity={[0, 1]} delay="1600">
            LIMITED
          </Anime>
        </span> */}
      </div>
      <Anime
        opacity={[0, 1]}
        delay="1000"
        easing="easeOutCirc"
        translateY={[50, 0]}
      >
        <div className="__sweven_home-main--content__description">
          Sweven Incorporate Private Limited is walking and pour a dream of
          digitalization Nation and world.
        </div>

        <Link className="__sweven_home-main--content__button" to="/contact-us">
          Contact Us &nbsp; <FontAwesomeIcon icon={faPhone} />
        </Link>
      </Anime>
    </div>
  );
};

export default HomeMainContent;
