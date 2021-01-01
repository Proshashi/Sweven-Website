import React from "react";

const HomeTeamCard = ({ name, position, shortFor, image }) => {
  return (
    <div className="__sweven_home-team--cards__card">
      <div className="__sweven_home-team--cards__card_image">
        <img src={image ? image : "./images/avatar.png"} alt="" />
      </div>
      <div className="__sweven_home-team--cards__card_detail">
        <div className="__sweven_home-team--cards__card_detail-name">
          {name}
        </div>
        <div className="__sweven_home-team--cards__card_detail-position">
          {position} <br />
          <span style={{ fontWeight: "bold" }}>({shortFor})</span>
        </div>
      </div>
      {/* <div className="__sweven_home-team--cards__card_links">
        <div className="__sweven_home-team--cards__card_links-facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <div className="__sweven_home-team--cards__card_links-twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className="__sweven_home-team--cards__card_links-linkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
      <div className="__sweven_home-team--cards__card_button">
        <button>Learn More</button>
      </div> */}
    </div>
  );
};

export default HomeTeamCard;
