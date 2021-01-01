import React from "react";
import SectionHeader from "../../includes/SectionHeader/SectionHeader";
import HomeClientsCards from "./ClientsCards/HomeClientsCards";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const HomeClients = () => {
  return (
    <div className="__sweven_home-clients">
      <Zoom>
        <SectionHeader title="Valuable Word from Valuable Customers" />
      </Zoom>
      <Fade bottom>
        <HomeClientsCards />
      </Fade>
    </div>
  );
};

export default HomeClients;
