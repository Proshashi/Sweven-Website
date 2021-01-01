import React from "react";
import HomeTeamCard from "./TeamCard/HomeTeamCard";
import Reveal from "react-reveal/Zoom";

const HomeTeamCards = () => {
  const teamMembers = [
    {
      name: "Akshyaj Bhattarai",
      position: "Chief Executive Officer",
      shortFor: "CEO",
      image: "./images/bishnu.jpg",
    },
    {
      name: "Sandesh Tiwari",
      position: "Chief Operating Officer",
      shortFor: "COO",
      image: "./images/sandesh.jpg",
    },
    {
      name: "Utsav Pahari",
      position: "Chief Business Officer",
      shortFor: "CBO",
      image: "./images/utsav.jpeg",
    },
    {
      name: "Shashi Gyawali",
      position: "Chief Software Engineer",
      shortFor: "CSE",
      image: "./images/shashi.jpg",
    },
    {
      name: "Shuhel Khan",
      position: "Chief Software Engineer",
      shortFor: "CSE",
    },
    {
      name: "Pawan Thapa",
      position: "Graphic Art Manager",
      shortFor: "GAM",
      image: "./images/pawan.jpg",
    },
  ];

  return (
    <div className="__sweven_home-team--cards">
      {teamMembers.map(({ name, position, shortFor, image }) => {
        return (
          <Reveal bottom>
            <HomeTeamCard
              name={name}
              position={position}
              shortFor={shortFor}
              image={image}
            />
          </Reveal>
        );
      })}
    </div>
  );
};

export default HomeTeamCards;
