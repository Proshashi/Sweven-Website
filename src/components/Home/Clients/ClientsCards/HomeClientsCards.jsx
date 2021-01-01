import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import HomeClientsCard from "./HomeClientCard/HomeClientsCard";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const HomeClientsCards = () => {
  return (
    <div className="__sweven_home-clients--cards">
      <Carousel
        infinite
        addArrowClickHandler
        autoPlay={5000}
        animationSpeed={800}
        stopAutoPlayOnHover
        keepDirectionWhenDragging
        dots
      >
        <HomeClientsCard />
        <HomeClientsCard />
        <HomeClientsCard />
        <HomeClientsCard />
      </Carousel>
    </div>
  );
};

export default HomeClientsCards;
