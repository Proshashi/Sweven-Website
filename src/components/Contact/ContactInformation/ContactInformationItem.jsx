import React, { Fragment } from "react";

const ContactInformationItem = ({ title, icon, info }) => {
  return (
    <Fragment>
      <div className="__sweven_contact-information--lists__item">
        <div className="__sweven_contact-information--lists__item_title">
          {title}
        </div>
        <div className="__sweven_contact-information--lists__item_detail">
          <div className="__sweven_contact-information--lists__item_detail-icon">
            {icon}
          </div>
          <div className="__sweven_contact-information--lists__item_detail-info">
            {info}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactInformationItem;
