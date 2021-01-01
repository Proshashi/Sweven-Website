import React from "react";
import HomeTeamCards from "./TeamCards/HomeTeamCards";
import SectionHeader from "../../includes/SectionHeader/SectionHeader";
import Fade from "react-reveal/Fade";

const HomeTeam = () => {
  return (
    <div className="__sweven_home-team">
      <Fade>
        <SectionHeader title="Our Team" />
      </Fade>
      <HomeTeamCards />
    </div>
  );
};

export default HomeTeam;
