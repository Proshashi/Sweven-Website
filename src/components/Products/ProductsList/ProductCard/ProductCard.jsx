import React, { useState, Fragment } from "react";
import Modal from "../../../includes/Modal/Modal";
const ProductCard = ({ name, description, image }) => {
  const [visible, setVisible] = useState(false);

  const hide = () => {
    setVisible(false);
  };

  const content = (
    <div className="__sweven_products-products--card__popup">
      <div className="__sweven_products-products--card__popup_image">
        <img src={image} alt="" />
      </div>
      <div className="__sweven_products-products--card__popup_description">
        <div className="__sweven_products-products--card__popup_description-title">
          {name}
        </div>
        <div className="__sweven_products-products--card__popup_description-body">
          {description}
        </div>
      </div>
    </div>
  );

  return (
    <Fragment>
      <Modal visible={visible} content={content} hide={hide} />
      <div
        className="__sweven_products-products--card"
        text={name}
        onClick={() => setVisible(true)}
      >
        <div className="__sweven_products-products--card__image">
          <img src={image} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
