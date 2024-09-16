"use client";
import Card from "@/components/ProductCard/Card";
import ProductCard from "@/components/ProductCard/ProductCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

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
    // Show success message without reloading
    Swal.fire({
      icon: "success",
      text: "Removed from wishlist!",
    });
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
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full gap-4 min-h-[200px]">
            {wishlist.map((product) => (
              <Card key={product._id} {...product}
              onRemoveFromWishlist={handleRemoveFromWishlist}></Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;