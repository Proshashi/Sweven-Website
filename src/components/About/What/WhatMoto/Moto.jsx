import React from "react";
import Zoom from "react-reveal/Zoom";

const Moto = ({ title, description }) => {
  return (
    <Zoom>
      <div className="__sweven_about-what--moto__lists_item">
        <div className="__sweven_about-what--moto__lists_item-title">
          {title}
        </div>
        <div className="__sweven_about-what--moto__lists_item-description">
          {description}
        </div>
      </div>
    </Zoom>
  );
};

export default Moto;
