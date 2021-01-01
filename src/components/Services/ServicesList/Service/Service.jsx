import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import Fade from "react-reveal/Fade";

import Modal from "../../../includes/Modal/Modal";
import ServiceModalContent from "./ServiceModalContent/ServiceModalContent";

const Service = ({ name, image, body, lists, service }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <div className="__sweven_services-list--wrapper__service">
      <Modal
        visible={visible}
        content={<ServiceModalContent service={service} />}
        hide={hide}
      />
      <Fade top duration={800}>
        <div className="__sweven_services-list--wrapper__service_image">
          <img src={image} alt="" />
        </div>
      </Fade>
      <Fade bottom duration={800}>
        <div className="__sweven_services-list--wrapper__service_description">
          <div className="__sweven_services-list--wrapper__service_description-title">
            {name}
          </div>
          <div className="__sweven_services-list--wrapper__service_description-body">
            {body}
          </div>
          <div className="__sweven_services-list--wrapper__service_description-lists">
            {lists.map((list) => {
              return (
                <span>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ fontSize: "1.25rem", color: "red" }}
                  />{" "}
                  &nbsp;
                  {list}
                </span>
              );
            })}
          </div>
          <div
            className="__sweven_services-list--wrapper__service_description-button"
            onClick={showModal}
          >
            Continue reading{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ fontSize: "1.25rem" }}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Service;
