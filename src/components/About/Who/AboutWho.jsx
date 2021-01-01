import React from "react";
import SectionHeader from "../../includes/SectionHeader/SectionHeader";
import WhoCards from "./WhoCards/WhoCards";
import Fade from "react-reveal/Fade";

const AboutWho = () => {
  return (
    <div className="__sweven_about-who">
      <Fade duration={3000}>
        <SectionHeader title="Who Are We ?" />
      </Fade>
      <Fade>
        <div className="__sweven_about-who--description">
          Sweven Incorporate Private Limited is the Digital & Tech company
          registered under company act in Nepal since 2019. We care about our
          clients all over the world and given them the best service with best
          satisfactory.
        </div>
      </Fade>
      <WhoCards />
    </div>
  );
};

export default AboutWho;
