import React from "react";
import WhoCard from "./WhoCard/WhoCard";

const cardsInfo = [
  {
    title: "Information Technologies",
    detail:
      "Addressing the evolving technical requirements of enterprises worldwide, Sweven Incorporate Pvt. Ltd. provides cost-effective and responsive IT solutions such as Modern Software, Mobile Apps, E-Commerce, Integration and web page developing and Progress Services.",
  },
  {
    title: "Digital Graphics",
    detail:
      "According to modern trend of business world requirements we can provide best digital graphics design, photography, videography and vector design. Our motivated team can work such as company logo, advertisement banner design with fully modernized and eye catcher ideas.",
  },
  {
    title: "SEO & Business Consult",
    detail:
      "World are aggressive and kind people are involved in digital information world so, modern business should attract to consumer in internet platform and we can make it easier to you. we will consult you with best possibilities and ideas to make fulfill your goal. We provide you digital marketing, digital advertising and SEO for double your business income and double your consumer.",
  },
  {
    title: "Innovation & Product",
    detail:
      "We are completely dedicated to make world easier and more satisfied with available possibilities and working on it. We are continually working on many projects and developing products one by one. Sweven Incorporate Private Limited believe in innovation ideas.",
  },
];

const WhoCards = () => {
  return (
    <div className="__sweven_about-who--cards">
      {cardsInfo.map(({ title, detail }) => {
        return <WhoCard title={title} detail={detail} key={title} />;
      })}
    </div>
  );
};

export default WhoCards;
