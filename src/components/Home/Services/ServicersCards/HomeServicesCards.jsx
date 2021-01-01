import React from "react";
import HomeServiceCard from "./Card/HomeServiceCard";

const HomeServicesCards = () => {
  const cards = [
    { title: "Website Designing", img: "/images/web-design1.png" },
    {
      title: "Mobile App Development",
      img: "/images/mobile-app-development.png",
    },
    {
      title: "Desktop App Development",
      img: "/images/desktop-app-development.png",
    },
    { title: "Digital Marketing", img: "/images/digital-marketing1.png" },
  ];
  return (
    <div className="__sweven_home-services--cards">
      {cards.map(({ title, img }) => {
        return <HomeServiceCard title={title} img={img} key={title} />;
      })}
    </div>
  );
};

export default HomeServicesCards;
