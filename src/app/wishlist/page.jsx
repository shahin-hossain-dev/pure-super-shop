"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

const page = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(savedWishlist);
  }, []);

  const handleRemoveFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter(item => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div className="wishlist-page container mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center mt-24 pb-12">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {wishlist.map((product) => (
            <div key={product.id} className="border hover:border-[#84b93e] hover:border-2 rounded-sm p-2">
              <Image src={product.ImageUrl} alt={product.productName} width={200} height={200} />
              <div>
                <h3 className="text-xl mb-2 text-center">{product.productName}</h3>
                <div className="gap-2 flex">
                  <button
                    onClick={() => handleDetails(product.id)}
                    className="w-full bottom-2 left-2 right-2 p-1 bg-gradient-to-t from-gray-300 to-gray-50"
                  >
                    Details
                  </button>
                </div>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="w-full mt-4 bottom-2 left-2 right-2 p-1 bg-gradient-to-t from-gray-300 to-gray-50"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleRemoveFromWishlist(product.id)}
                  className="w-full mt-2 bottom-2 left-2 right-2 p-1 bg-red-300 hover:bg-red-400"
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
