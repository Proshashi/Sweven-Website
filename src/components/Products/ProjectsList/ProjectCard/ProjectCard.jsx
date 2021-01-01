import React from "react";

const ProjectCard = ({ image, name }) => {
  return (
    <div className="__sweven_products-projects--lists__item" text={name}>
      <img src={image} alt="" />
    </div>
  );
};

export default ProjectCard;
