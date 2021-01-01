import React from "react";
import SectionHeader from "../../../../includes/SectionHeader/SectionHeader";

const ServiceModalContent = ({ service }) => {
  console.log(service);

  const { descriptionHeader, description, cards, extraColors, extra } = service;

  return (
    <div className="__sweven_services-list--wrapper__service_modal">
      <SectionHeader
        title={service.name}
        className="__sweven_services-list--wrapper__service_modal-header"
      />

      <div className="__sweven_services-list--wrapper__service_modal-quote">
        <div className="__sweven_services-list--wrapper__service_modal-quote--text">
          "{descriptionHeader.text}"
        </div>
        <div className="__sweven_services-list--wrapper__service_modal-quote--person">
          - {descriptionHeader.person}
        </div>
      </div>
      <div className="__sweven_services-list--wrapper__service_modal-description">
        {description}
      </div>
      <div className="__sweven_services-list--wrapper__service_modal-cards">
        {cards.map(({ title, lists }) => {
          return (
            <div className="__sweven_services-list--wrapper__service_modal-cards--card">
              <div className="__sweven_services-list--wrapper__service_modal-cards--card__title">
                {title}
              </div>
              <br />
              <ul className="__sweven_services-list--wrapper__service_modal-cards--card__lists">
                {lists.map((list) => {
                  return (
                    <li className="__sweven_services-list--wrapper__service_modal-cards--card__lists_item">
                      {list}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="__sweven_services-list--wrapper__service_modal-extra">
        <SectionHeader title="Extra from us" />
        {extra.map(({ title, description, image }, id) => {
          return (
            <div
              className="__sweven_services-list--wrapper__service_modal-extra--item"
              style={{ backgroundColor: extraColors[id] }}
            >
              <div className="__sweven_services-list--wrapper__service_modal-extra--title">
                {title}
              </div>
              <div className="__sweven_services-list--wrapper__service_modal-extra--description">
                <img src={image} alt="" height="50px" />
                <div>{description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceModalContent;
