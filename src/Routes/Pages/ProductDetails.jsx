import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const product = useLoaderData();
  const {
    id,
    brand,
    description,
    gender,
    image_url,
    price,
    product_name,
    size,
  } = product;

  useEffect(() => {
    let cart = {};
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      cart = JSON.parse(storedCart);
    }
    const quantity = 0;
    const newQuantity = quantity + count;
    cart[id] = newQuantity;
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [count]);

  return (
    <div className="my-16 md:flex gap-10">
      <img className="md:w-2/5" src={image_url} alt="product image" />
      <div className="flex flex-col px-2 md:px-0 my-3 md:my-0">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          {product_name}
        </h2>
        <h3 className="font-bold text-2xl text-gray-800 mb-3">
          Brand: {brand}
        </h3>
        <p className="font-bold text-xl mb-2 text-gray-700">price:${price}</p>
        <p className="font-bold text-xl mb-2 text-gray-800">Gender: {gender}</p>
        <p className="font-bold text-xl mb-2">Size-available: {size}</p>
        <p className="text-lg text-gray-600">{description}</p>
        <div className="flex gap-10 items-center mt-10">
          <p className="font-bold text-xl">Quantity</p>
          <div className="flex items-center gap-3">
            <FaPlus
              onClick={() => setCount(count + 1)}
              className="duration-200 cursor-pointer hover:text-yellow-500 w-8 h-8 p-2 bg-gray-100 text-black"
            ></FaPlus>
            <p className="w-10 text-center text-semibold text-lg">{count}</p>
            <FaMinus
              onClick={() => count > 1 && setCount(count - 1)}
              className="duration-200 cursor-pointer hover:text-yellow-500 w-8 h-8 p-2 bg-gray-100 text-black"
            ></FaMinus>
          </div>
        </div>

        <Link to="/cart" className="mt-auto w-fit pt-5">
          <button className="btn btn-warning">Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
