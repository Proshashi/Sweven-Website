import React, { Fragment } from "react";
import SectionHeader from "../../includes/SectionHeader/SectionHeader";
import ProductCard from "./ProductCard/ProductCard";

const products = [
  {
    name: "Digital Menu",
    description:
      "Digital Menu is the first Project of Sweven Incorporate Private Limited. It is the converted digitalized menu from traditional paper menu for Restaurant, Bar, Lounge and Lodges. Smoother, easier and user-friendly product is specialized and full of creativeness for customer satisfactory.",
    image: "/images/dm.png",
  },
  {
    name: "Lekha-Accounting solution",
    description:
      "We are working on accounting software & mobile application. Financial & Accountancy is the main part of a business so, we understand this feel and we are working with our best and specialized team in this project to fulfill your desire to understand, how accountancy work in your business and we are trying to develop an software for everyone who didn't learn about debit and credit accountancy. We are sure it will be true for yours.",
    image:
      "https://i.pinimg.com/736x/d4/e6/b9/d4e6b9b20b3213ee0cf67cef7e138c02.jpg",
  },
];

const ProductsList = () => {
  return (
    <Fragment>
      <SectionHeader title="Our Products" />
      <div className="__sweven_products-products">
        {products.map(({ name, description, image }) => {
          return (
            <ProductCard
              name={name}
              description={description}
              image={image}
              key={name}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default ProductsList;
