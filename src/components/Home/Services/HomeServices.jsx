import React from "react";

import Zoom from "react-reveal/Zoom";

import HomeServicesTitle from "./ServicesTitle/HomeServicesTitle";
import HomeServicesBody from "./ServicesBody/HomeServicesBody";
import HomeServiceCards from "./ServicersCards/HomeServicesCards";

const HomeServices = () => {
  return (
    <>
      <HomeServicesTitle />

      <div className="__sweven_home-services">
        <div className="__sweven_home-services--container">
          <div className="__swe ven_home-services--container__right">
            <HomeServiceCards />
          </div>
          <div className="__sweven_home-services--container__left">
            <Zoom top>
              <HomeServicesBody />
            </Zoom>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeServices;
