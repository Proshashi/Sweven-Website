import React from "react";
import Zoom from "react-reveal/Zoom";

const WhoCard = ({ title, detail }) => {
  return (
    <Zoom>
      <div className="__sweven_about-who--cards__card">
        <div className="__sweven_about-who--cards__card_title">{title}</div>
        <div className="__sweven_about-who--cards__card_description">
          {detail}
        </div>
      </div>
    </Zoom>
  );
};

export default WhoCard;
