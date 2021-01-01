import React from "react";
import Zoom from "react-reveal/Zoom";

const HomeServiceCard = ({ title, img }) => {
  return (
    <Zoom duration={350}>
      <div className="__sweven_home-services--cards__card">
        <div className="__sweven_home-services--cards__card_thumbnail">
          <img src={img} alt={title} />
        </div>
        <div className="__sweven_home-services--cards__card_title">{title}</div>
      </div>
    </Zoom>
  );
};

export default HomeServiceCard;
