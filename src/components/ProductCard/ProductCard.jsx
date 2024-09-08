"use client";
import Image from "next/image";
import React from "react";

const ProductCard = (product) => {
  const { productName, price, categoryName, discountPrice } = product;
  const handleAddToCart = (id) => {
    console.log("add to cart");
  };
  const handleDetails = (id) => {
    console.log(id);
  };
  return (
    <div className=" border hover:border-[#84b93e] hover:border-2 rounded-sm p-2">
      <Image src={""} alt={productName} width={200} height={200} />
      <div>
        <h3 className="text-xl mb-2 text-center">{productName}</h3>
        <div className="gap-2 flex ">
          <button
            onClick={() => handleDetails("id")}
            className=" w-full bottom-2 left-2 right-2 p-1 bg-gradient-to-t from-gray-300 to-gray-50 "
          >
            Details
          </button>
          <button
            onClick={handleAddToCart}
            className="w-full  bottom-2 left-2 right-2 p-1 bg-gradient-to-t from-gray-300 to-gray-50 "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
