import React from "react";
import SectionHeader from "../../includes/SectionHeader/SectionHeader";
import WhatMoto from "./WhatMoto/WhatMoto";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const AboutWhat = () => {
  return (
    <div className="__sweven_about-what">
      <Fade>
        <SectionHeader title="What do we do ?" />
      </Fade>
      <Zoom>
        <div className="__sweven_about-what--description">
          We specialize in software development, application development,
          internet marketing services, graphics design services, multimedia
          services & business development consultant services. We have been
          working on for produce our product to make easier world with digital
          ink.
        </div>
        <WhatMoto />
      </Zoom>
    </div>
  );
};

export default AboutWhat;
