import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const CartProductCard = ({ product, handleRemoveItem }) => {
  const { id, quantity, product_name, brand, price, image_url } = product;

  return (
    <div className="flex items-center gap-5 shadow-lg border rounded-md p-3">
      <img
        className="w-28 rounded-md inline"
        src={image_url}
        alt="product-image"
      />
      <div className="flex items-center w-full justify-between">
        <div>
          <h3 className="font-bold">{product_name}</h3>
          <h3 className="font-semibold">{brand}</h3>
          <h3 className="font-semibold">Price: ${price}</h3>
          <p>quantity: {quantity}</p>
        </div>
        <div>
          <button
            onClick={() => handleRemoveItem(id)}
            className="btn btn-warning rounded-full"
          >
            <FaTrashAlt></FaTrashAlt>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
