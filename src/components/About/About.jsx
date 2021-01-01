import React from "react";
import AboutMain from "./Main/AboutMain";
import AboutWho from "./Who/AboutWho";
import AboutWhat from "./What/AboutWhat";

const About = () => {
  return (
    <div className="__sweven_about">
      <AboutMain />
      <AboutWho />
      <AboutWhat />
      {/* <HomeTeam /> */}
    </div>
  );
};

export default About;
