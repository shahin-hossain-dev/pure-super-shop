"use client";
import { AddToCartContext } from "@/services/AddToCartProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
import CartCard from "./CartCard/CartCard";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

const ShoppingSideBar = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const { update } = useContext(AddToCartContext);
  const session = useSession();
  const userEmail = session?.data?.user?.email;
  // const [carts, setCarts] = useState([]);

  /*  useEffect(() => {
    const loadCartData = async () => {
      const carts = await axios.get(
        `http://localhost:3000/products/api/addToCart/${userEmail}`
      );
      setCarts(carts.data);
    };
    loadCartData();
  }, [userEmail, update]); */

  const { data: carts, refetch } = useQuery({
    queryKey: ["carts", userEmail, update],
    queryFn: async () => {
      const data = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/addToCart/${userEmail}`
      );
      console.log(data.data);
      return data.data;
    },
  });

  // delete Items
  const { mutate } = useMutation({
    mutationFn: async (id) => {
      const resp = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/addToCart/delete/${id}`
      );
      console.log(resp);
      if (resp) {
        refetch();
      }
    },
  });
  const handleDelete = (id) => {
    mutate(id);
  };

  const handleCartItem = () => {
    setIsCartVisible(true);
  };

  const handleCloseCart = () => {
    setIsCartVisible(false);
  };

  return (
    <div className="relative">
      {/* Cart button */}
      {!isCartVisible && (
        <div
          onClick={handleCartItem}
          className="fixed right-0 top-1/2 transform -translate-y-1/2 checkout-icon cursor-pointer text-white bg-[#84b93e] size-16 text-center duration-500 ease-in-out rounded-md p-2 flex flex-col items-center justify-center gap-1"
        >
          <span className="text-xl">
            <HiOutlineShoppingBag />
          </span>
          {carts?.length} Item
        </div>
      )}

      {/* Sliding cart */}
      <div
        className={`fixed right-0 top-0 h-screen z-50 bg-white shadow-lg w-[400px] transition-transform duration-500 ease-in-out ${
          isCartVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Container to ensure proper layout */}
        <div className="flex flex-col h-full">
          {/* Cart Header */}
          <div className="p-4 flex items-center justify-between bg-[#84b93e] text-white">
            <h2 className="text-base font-medium">Your Shopping Cart</h2>
            <button onClick={handleCloseCart}>
              <FaArrowRight />
            </button>
          </div>

          {/* Cart Items */}
          <div>
            {carts?.map((cart) => (
              <CartCard
                key={cart._id}
                cart={cart}
                handleDelete={handleDelete}
              ></CartCard>
            ))}
          </div>

          {/* Checkout Page Link Buttons at the bottom */}
          <div className="flex items-center justify-center gap-6 bg-slate-100 py-5">
            <Link
              href={"/checkout"}
              className="px-10 py-2 bg-[#84b93e] text-white rounded hover:bg-green-600"
            >
              View Cart
            </Link>
            <Link
              href={"/checkout"}
              className="px-10 py-2 bg-[#84b93e] text-white rounded hover:bg-green-600"
            >
              Check out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingSideBar;
