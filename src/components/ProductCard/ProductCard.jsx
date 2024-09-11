"use client";
import Image from "next/image";
import React from "react";

const ProductCard = (product) => {
  const { id, productName, price, categoryName, discountPrice, ImageUrl } =
    product;

  const handleAddToCart = (id) => {
    console.log("add to cart");
  };
  const handleAddToWishlist = (product) => {
    // fakhrul islam
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    // Check if the item is already in the wishlist
    if (!wishlist.some((item) => item._id === product._id)) {
      wishlist.push(product); // Add the product if it's not already in the wishlist
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } else {
      alert("This item is already in your wishlist!");
    }
  };
  const handleDetails = (id) => {
    console.log(id);
  };
  return (
    <div className=" flex flex-col justify-between border hover:border-[#84b93e] hover:border-2 rounded-sm p-2">
      <div className="w-full">
        <Image
          src={ImageUrl}
          alt={productName}
          width={500}
          className="object-cover"
          height={500}
        />
      </div>
      <div>
        <h3 className="text-xl mb-2 text-center">{productName}</h3>
        <p className="text-xl mb-2 text-center text-[#84b93e] font-medium">
          ${price}
        </p>
        <div className="gap-2 flex ">
          <button
            onClick={() => handleDetails("id")}
            className=" w-full bottom-2 left-2 right-2 p-1 bg-gradient-to-t from-gray-300 to-gray-50 "
          >
            Details
          </button>

          <button
            onClick={() => handleAddToWishlist(product)}
            className="w-full bottom-2 left-2 right-2 p-1 bg-gradient-to-t from-gray-300 to-gray-50 "
          >
            Add to WishList
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full mt-4 bottom-2 left-2 right-2 p-1 bg-gradient-to-t from-gray-300 to-gray-50 "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
