import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, product_name, brand, price, description, image_url } = product;
  return (
    <div className="shadow-xl flex flex-col justify-between rounded-lg overflow-hidden">
      <img src={image_url} alt="Shoes" className=" md:h-64 xl:h-80" />
      <div className="p-5">
        <h2 className="card-title">{product_name}</h2>
        <h3 className="text-lg font-semibold my-2">Brand: {brand}</h3>
        <p className="text-lg mb-5 font-semibold">price: ${price}</p>
        <p className="text-gray-600 mb-5">{description}</p>
        <div className="text-right">
          <Link to={`/product/details/${id}`}>
            <button className="btn btn-warning">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
