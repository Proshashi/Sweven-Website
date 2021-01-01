import React from "react";
import HomeMain from "./Main/HomeMain";
import HomeServices from "./Services/HomeServices";
// import HomeProdects from "./Products/HomeProdects";
import HomeTeam from "./Team/HomeTeam";
// import HomeClients from "./Clients/HomeClients";
const Home = () => {
  return (
    <div className="__sweven_home">
      <HomeMain />
      <HomeServices />
      <HomeTeam />
      {/* <HomeClients /> */}
    </div>
  );
};

export default Home;
