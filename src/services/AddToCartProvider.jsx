"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import React, { createContext, useEffect, useState } from "react";

export const AddToCartContext = createContext(null);

const AddToCartProvider = ({ children }) => {
  const session = useSession();
  const [carts, setCarts] = useState([]);
  const userEmail = session?.data?.user?.email;
  //   add to cart handle ler
  const handleAddToCart = async (product) => {
    if (userEmail) {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/addToCart`,
        {
          productId: product._id,
          userEmail,
          ImageUrl: product.ImageUrl,
          productName: product.productName,
          price: product.price,
        }
      );
      if (res.status !== 200) {
        Swal.fire({
          icon: "error",
          title: "Please Login First",
          timer: 1000,
        });
      }
    }
  };

  //   product cart update
  //   const {
  //     data: carts,
  //     error,
  //     isLoading,
  //   } = useQuery({
  //     queryKey: ["cart", userEmail],
  //     queryFn: async () => {
  //       const carts = await axios.get(
  //         `http://localhost:3000/products/api/addToCart/${userEmail}`
  //       );
  //       console.log(carts);
  //       return carts.data;
  //     },
  //   });
  useEffect(() => {
    const loadCartData = async () => {
      const carts = await axios.get(
        `http://localhost:3000/products/api/addToCart/${userEmail}`
      );
      setCarts(carts.data);
    };
    loadCartData();
  }, [userEmail]);

  const cartInfo = {
    handleAddToCart,
    carts,
  };

  return (
    <AddToCartContext.Provider value={cartInfo}>
      {children}
    </AddToCartContext.Provider>
  );
};

export default AddToCartProvider;
