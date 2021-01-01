import React from "react";
import SectionHeader from "../../includes/SectionHeader/SectionHeader";
import ProjectCard from "./ProjectCard/ProjectCard";

const projects = [
  {
    name: "Lumbini Palace Resort Website",
    image: "/images/lumbiniPalaceLanding.png",
  },
  {
    name: "GMI Group Website",
    image: "/images/GMIgroupLanding.png",
  },
];

const ProjectsList = () => {
  return (
    <div className="__sweven_products-projects">
      <SectionHeader
        title="Our Projects"
        style={{ color: "#616ac1", fontSize: "4rem" }}
      />
      <div className="__sweven_products-projects--lists">
        {projects.map((p) => {
          return <ProjectCard image={p.image} name={p.name} key={p.name} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsList;
