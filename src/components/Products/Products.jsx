import React from "react";
import SectionHeader from "../includes/SectionHeader/SectionHeader";
import DigitalMenu from "./DigitalMenu/DigitalMenu";
import ProductsMain from "./Main/ProductsMain";
import ProjectsList from "./ProjectsList/ProjectsList";

const Products = () => {
  return (
    <div className="__sweven_products">
      <ProductsMain />
      <SectionHeader
        title="Our Products"
        style={{ color: "#616ac1", fontSize: "4rem" }}
      />
      <DigitalMenu />
      <ProjectsList />
    </div>
  );
};

export default Products;
