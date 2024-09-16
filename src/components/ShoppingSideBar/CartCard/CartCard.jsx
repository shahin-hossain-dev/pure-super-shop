"use client";
import React from "react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const CartCard = ({ cart, handleDelete }) => {
  const { _id, ImageUrl, price, productId, productName, userEmail } = cart;

  return (
    <div className="flex-grow overflow-y-auto">
      <div className="flex items-center justify-between gap-3 p-2 bg-slate-100 border-b px-4">
        <div className="flex items-center gap-3">
          <Image width={56} height={56} src={ImageUrl} alt={productName} />
          <div className="space-y-3">
            <h3 className="text-base">{productName}</h3>
            <div className="quantity flex items-center gap-4">
              <button className="border border-black text-center px-2 rounded-md text-xl">
                {" "}
                -{" "}
              </button>
              <p className="">1</p>
              <button className="border border-black text-center px-2 rounded-md text-xl">
                {" "}
                +{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-3">
          <button
            onClick={() => handleDelete(_id)}
            className="text-white bg-red-600 px-2 rounded-md"
          >
            {" "}
            X{" "}
          </button>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
