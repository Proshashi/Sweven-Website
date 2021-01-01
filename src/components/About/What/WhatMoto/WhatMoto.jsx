import React from "react";
import Moto from "./Moto";

const motos = [
  {
    title: "Ink With Digital",
    description:
      "As our main moto we are trying to make the world with digitalized ink with our best professional skills and innovative ideas. Sweven Incorporate Private Limited is walking and pour a dream of digitalization Nation and world",
  },
  {
    title: "Brand with Love",
    description:
      "We believe in skills and innovation so, S-inc. Team always work on develop a best brand instead of high profitability. We are continually working on making product and presence in loving people community with our best skills and innovation.",
  },
  {
    title: "Year with a glass of beer",
    description:
      "Beer is not bad as limit consume. Yeah! we aren't talking exactly beer, talking about our best product and talking about celebrating every year with award of love from our valuable family. 😊",
  },
];

const WhatMoto = () => {
  return (
    <div className="__sweven_about-what--moto">
      <div className="__sweven_about-what--moto__heading">Our Moto</div>
      <div className="__sweven_about-what--moto__lists">
        {motos.map(({ title, description }) => {
          return <Moto key={title} title={title} description={description} />;
        })}
      </div>
    </div>
  );
};

export default WhatMoto;
