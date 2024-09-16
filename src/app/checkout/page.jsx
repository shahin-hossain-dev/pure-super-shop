"use client";

import Image from "next/image";

const CheckOut = () => {
  return (
    <div className="max-w-[1440px] w-[95%] md:w-11/12 mx-auto py-20 px-3 lg:px-0 flex flex-col lg:flex-row gap-24">
      <div className="w-full lg:w-2/3">
        <h2 className="text-3xl font-Barlow font-semibold mb-6">
          An overview of your order
        </h2>
        <div className="rounded-lg">
          {/* this code for loop */}
          <div className="flex justify-between items-center p-6 border-b bg-[#FAFAFA]">
            <div className="flex gap-8">
              <div className="flex items-center gap-3">
                <button className="text-lg border px-2 rounded-md">−</button>
                <span>2</span>
                <button className="text-lg border px-2 rounded-md">+</button>
              </div>
              <Image
                height={20}
                width={20}
                className="w-20 h-20 object-cover rounded-md bg-[#eaeaea] p-3"
                src=""
                alt=""
              />
              <h3 className="font-Barlow text-base font-bold">Noodlese</h3>
            </div>
            <div className="flex justify-between items-end flex-col gap-10">
              <button className="text-lg">X</button>

              <p className="font-Barlow text-xl font-semibold">€ 150</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right column: Order details */}
      <div className="w-full lg:w-1/3">
        <h2 className="text-3xl font-Barlow font-semibold mb-6">
          Order details
        </h2>
        <div className="p-6 bg-[#FAFAFA]  border-[#DEDEDE] rounded-lg shadow-sm">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-[#656565] font-Barlow text-xl font-normal">
              <span>Subtotal</span>
              <span>$ 6510</span>
            </div>
            <div className="flex justify-between text-[#656565] font-Barlow text-xl font-normal">
              <span>Shipping</span>
              <span>5605</span>
            </div>
            <div className="flex justify-between text-[#656565] font-Barlow text-xl font-normal">
              <span className="flex items-center">Estimated Tax</span>
              <span>$-</span>
            </div>
          </div>
          <div className="flex justify-between text-[#656565] font-Barlow text-2xl font-semibold">
            <span>Total</span>
            <span>$ 656616</span>
          </div>
        </div>
        <button className="mt-6 w-full py-3 bg-[#84b93e] text-lg font-Barlow text-white rounded-lg">
          Go to checkout
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
