import React from "react";
import Bounce from "react-reveal/Jump";
const HomeClientsCard = () => {
  return (
    <div className="__sweven_home-clients--cards__card">
      <div className="__sweven_home-clients--cards__card_picture">
        <img src="/images/avatar.png" alt="" />
      </div>
      <div className="__sweven_home-clients--cards__card_body">
        <div className="__sweven_home-clients--cards__card_body-name">
          John Doe
          <div
            style={{ fontSize: "1.5rem", fontFamily: "Roboto-Regular" }}
            className="__sweven_home-clients--cards__card_body-name--company"
          >
            (CEO) Example Company
          </div>
        </div>
        <div className="__sweven_home-clients--cards__card_body-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          tenetur neque magni, quos molestias deleniti reiciendis iusto, fugiat
          nisi natus ad atque exercitationem ut consequatur quas aperiam eum,
          vero iure!
        </div>
      </div>
    </div>
  );
};

export default HomeClientsCard;
