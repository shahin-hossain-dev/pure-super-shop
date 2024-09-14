import React from "react";
import { brands } from "@/lib/brands";
import Image from "next/image";
import Link from "next/link";

const Brands = () => {
  return (
    <div className="mx-auto py-20 px-3 lg:px-0">
      <div className="text-center max-w-2xl  mx-auto">
        <h1 className="text-3xl font-bold mb-2">Our Popular Brands</h1>
        <p className="text-gray-600">Explore a wide selection of trusted brands known for their quality and freshness. From everyday essentials to specialty items, find everything you need from the brands you love.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mt-10 ">
        {brands.slice(7, 13).map((brand, index) => (
          <div key={index} className="bg-[#F7F7F8] rounded-md hover:shadow-lg border-2 hover:border-[#84b93e] py-3 flex justify-center">

            <Image src={brand.image} alt={brand.name} className="block w-28 h-16" width={100} height={80} />
          </div>

        ))}
      </div>
        {/* Directly apply the class to Link */}
        <div className="flex justify-center py-10">

        <Link href="/brands" className="bg-[#84b93e] text-white  py-4 px-6 text-sm rounded-xl ">
          See More...
        </Link>
        </div>
    </div>
  );
};

export default Brands;
