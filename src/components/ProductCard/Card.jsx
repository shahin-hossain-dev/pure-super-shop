import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import Swal from "sweetalert2";

const Card = ({ product }) => {
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
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img
        src={product.ImageUrl}
        alt={product.productName}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
      <p className="text-gray-600 text-sm mb-2">{product.categoryName}</p>
      <p className="text-xl font-bold text-green-600">
        ${product.discountPrice ? product.discountPrice : product.price}
      </p>
      <div className="flex justify-end mt-4 gap-4">
        {/* <div className="flex gap-4"> */}
        <button
          onClick={() => handleAddToWishlist(product)}
          className="bg-cyan-300 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
        >
          <FaRegHeart />
        </button>
        <button className="bg-yellow-800 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
          <FaShoppingCart />
        </button>
        <button className="bg-green-800 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
          Buy
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Card;
