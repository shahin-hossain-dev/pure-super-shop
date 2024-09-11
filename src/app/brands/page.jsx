import React from "react";
import { brands } from "@/lib/brands";
import Navbar from "@/components/sharePage/Navbar";

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="m-5 max-w-[1320px] mx-auto">
        <h1 className="text-4xl">Our All Brands</h1>
        <div className=" grid grid-cols-6 gap-5">
          {brands.map((brand, index) => (
            <div
              key={index}
              className=" p-2 flex flex-col justify-between shadow-md rounded-md cursor-pointer"
            >
              <div className=" w-full flex flex-col h-full justify-center items-center ">
                <img
                  src={brand.image}
                  alt={brand.name}
                  width="200"
                  height="200"
                />
              </div>
              <h2 className=" bg-gray-200 py-2 my-2 text-center text-xl font-semibold">
                {brand.brandName}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
