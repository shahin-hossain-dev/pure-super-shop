"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import Swal from "sweetalert2";
import Link from "next/link";
import { useSession } from "next-auth/react";
import axios from "axios";
import { AddToCartContext } from "@/services/AddToCartProvider";

const ProductCard = (product) => {
  const session = useSession();
  const { handleAddToCart } = useContext(AddToCartContext);
  const { _id, productName, price, categoryName, discountPrice, ImageUrl } =
    product;
  const userEmail = session?.data?.user?.email;

  const handleAddToWishlist = (product) => {
    // fakhrul islam
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    // Check if the item is already in the wishlist
    if (!wishlist.some((item) => item._id === product._id)) {
      wishlist.push(product); // Add the product if it's not already in the wishlist
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      Swal.fire({
        icon: "success",
        text: "Added to your wishlist!",
      });
    } else {
      Swal.fire({
        icon: "error",
        text: "This product is already added to your wishlist!",
      });
    }
  };

  return (
    <div className="card box-border relative flex flex-col justify-between border hover:border-[#84b93e] duration-300 hover:border-1 rounded-sm p-2">
      <div className=" right-3 top-3 absolute flex flex-col view-wish">
        <Link href={`products/${_id}`}>
          <button className="bg-gray-100 mb-2 p-2 text-[#84b93e] active:scale-95 hover:bg-[#84b93e] duration-300  active:bg-[#6a9630] hover:text-white rounded-full">
            <FaRegEye className="text-2xl  " />
          </button>
        </Link>
        {/* wish list */}

        <button
          onClick={() => handleAddToWishlist(product)}
          className="bg-gray-100 mb-3 p-2 text-red-500 hover:bg-[#84b93e] active:scale-[-10px] duration-300 active:bg-[#6a9630] hover:text-white rounded-full"
        >
          <FaRegHeart className="text-2xl " />
        </button>
      </div>

      {/* Product Image */}
      <div className="w-full">
        <Image
          src={ImageUrl}
          alt={productName}
          width={500}
          className="object-cover"
          height={500}
        />
      </div>

      {/* Product Info and Fixed Buttons */}
      <div className="flex flex-col justify-end flex-grow mt-2">
        <h3 className="text-xl mb-2 text-center">{productName}</h3>
        <p className="text-xl mb-2 text-center text-[#84b93e] font-medium">
          ${price}
        </p>

        {/* Add to Cart Button Fixed at the Bottom */}
        <div className="mt-auto"></div>
        <button
          onClick={() => handleAddToCart(product)}
          className="w-full mt-4 bottom-2 left-2 rounded-sm active:scale-95 right-2 p-1 bg-gray-300 hover:bg-[#84b93e] duration-300  active:bg-[#6a9630] hover:text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
