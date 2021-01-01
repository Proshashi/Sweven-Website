import React from "react";
import { Link } from "react-router-dom";
import Anime from "react-anime";

const ProductsMainContent = () => {
  return (
    <div className="__sweven_products-main--content">
      <div className="__sweven_products-main--content__heading">
        <Anime opacity={[0, 1]} translateX={[100, 0]} delay={1000}>
          <div>
            <span>Innovation </span>
            <span>And </span>
            <span>Product </span>
          </div>
        </Anime>
      </div>
      <div className="__sweven_products-main--content__text">
        <Anime opacity={[0, 1]} translateY={[30, 0]} delay={1200}>
          We are completely dedicated to make world easier and more satisfied
          with available possibilities and working on it.
        </Anime>
      </div>
      <Anime opacity={[0, 1]} scale={[0, 1]} delay={1200}>
        <div className="__sweven_products-main--content__button">
          <Link to="/contact-us">Get your products</Link>
        </div>
      </Anime>
    </div>
  );
};

export default ProductsMainContent;
