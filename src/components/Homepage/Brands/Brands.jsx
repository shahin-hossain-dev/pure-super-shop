import React from "react";
import { brands } from "@/lib/brands";
import Image from "next/image";
import Link from "next/link";

const Brands = () => {
  return (
    <div className="w-full mt-10">
      <div className="flex justify-center">
        <h1 className="text-4xl">OUR POPULAR BRANDS</h1>
      </div>
      <div className="flex justify-center gap-10 mt-7 items-center">
        {brands.slice(1, 7).map((brand, index) => (
          <Image key={index} src={brand.image} alt={brand.name} width={130} height={130} />
        ))}
        {/* Directly apply the class to Link */}
        <Link href="/brands" className="bg-green-300 h-[40px] px-3 text-sm rounded-xl flex items-center justify-center">
          See More...
        </Link>
      </div>
    </div>
  );
};

export default Brands;
