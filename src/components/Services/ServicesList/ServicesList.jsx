import React from "react";
import SectionHeader from "../../includes/SectionHeader/SectionHeader";
import Service from "./Service/Service";

const ServicesList = () => {
  const { services } = require("./Service/ServicesLists");

  console.log(services);

  return (
    <div className="__sweven_services-list">
      <SectionHeader title="Our Services" />
      <div className="__sweven_services-list--wrapper">
        {services.map((service) => {
          return (
            <Service
              name={service.name}
              image={service.image}
              body={service.label}
              lists={service.lists}
              service={service}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServicesList;
