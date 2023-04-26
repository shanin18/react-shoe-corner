import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CartProductCard from "./CartProductCard";

const Cart = () => {
  const data = useLoaderData();
  const [products, setProducts] = useState(data);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id == id);
      setProducts(addedProduct);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setProducts(savedCart);
  }, []);

  let total = 0;
  let totalQuantity = 0;
  for (const product of products) {
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }

  const handleRemoveItem = (id) => {
    const remaining = products.filter((product) => product.id !== id);
    console.log(remaining);
    setProducts(remaining);

    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (id in storedCart) {
      delete storedCart[id];
      localStorage.setItem("cart", JSON.stringify(storedCart));
    }
  };

  return (
    <div>
      {products.length === 0 ? (
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-bold text-2xl">Oops!! no items found</h2>
            <Link to="/">
              <button className="btn btn-warning btn-outline mt-10">
                Continue Shopping!!
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-10 md:gap-4">
          <div className="flex flex-col gap-3">
            {products?.map((product) => (
              <CartProductCard
                key={product.id}
                product={product}
                handleRemoveItem={handleRemoveItem}
              ></CartProductCard>
            ))}
          </div>

          <div className="border p-4 rounded h-fit shadow-lg">
            <h2 className="font-bold text-2xl mb-5 text-center text-yellow-400">
              Order Summery
            </h2>
            <p className="font-semibold text-lg mb-3">
              Total Items: {totalQuantity}
            </p>
            <p className="font-semibold text-lg mb-3">Total: ${total}</p>
            <button className="btn btn-warning w-full">Place order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
