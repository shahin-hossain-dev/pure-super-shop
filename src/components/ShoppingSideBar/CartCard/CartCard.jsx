"use client";
import React from "react";
import Image from "next/image";

const CartCard = ({ cart }) => {
  console.log(cart);
  const {} = cart;
  return (
    <div className="flex-grow overflow-y-auto">
      <div className="flex items-center justify-between gap-3 p-2 bg-slate-100 border-b px-4">
        <div className="flex items-center gap-3">
          <Image
            width={56}
            height={56}
            className="size-14"
            src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/65fa96c2d61902ef2307b5f7_Ifad-Eggy-Masala-Noodles-200gm-Buy2-Get1-Free_1_550.webp"
            alt="Ifad Eggy Masala Noodles"
          />
          <div className="space-y-3">
            <h3 className="text-base">Ifad Eggy Masala Noodles</h3>
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
        <div className="flex flex-col justify-between gap-3">
          <button> X </button>
          <p>৳180</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
