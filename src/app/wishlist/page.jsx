"use client";
import ProductCard from "@/components/ProductCard/ProductCard";
import Image from "next/image";
import { useEffect, useState } from "react";

const page = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const handleRemoveFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="">
      <div className="wishlist-page">
        <h1 className="text-2xl font-bold mb-4 text-center mt-10 pb-12">
          My Wishlist
        </h1>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {wishlist.map((product) => (
              <ProductCard key={product._id} {...product}></ProductCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;