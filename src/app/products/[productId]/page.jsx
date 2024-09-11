import { getProductWithId } from "@/services/getProducts";
import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineFacebook } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { PiVanBold } from "react-icons/pi";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
const page = async ({ params }) => {
  const product = await getProductWithId(params.productId);
  const {
    _id,
    productName,
    price,
    categoryName,
    subCategory,
    discountPrice,
    ImageUrl,
  } = product;

  return (
    <section>
      <div>
        <h3 className="border-b py-2">
          <span className="text-lg font-base"> Products</span>{" "}
          <IoIosArrowForward className="inline text-xl" />{" "}
          <span className="text-lg font-medium">{productName}</span>
        </h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* col -1 */}
          <div>
            <Image
              src={ImageUrl}
              alt=""
              height={400}
              width={400}
              className="border rounded-md"
            />
          </div>
          {/* col 2 */}
          <div>
            <h2 className="text-2xl text-[#333333] mb-2 font-medium">
              {productName}
            </h2>
            <h3 className="text-2xl font-bold text-[#84b93e]">${price}</h3>
            <button
              //   onClick={handleAddToCart}
              className="px-5 py-1 font-medium mt-4 bottom-2 left-2 rounded-lg active:scale-95 right-2 p-1 bg-[#84b93e] duration-300  active:bg-[#6a9630] text-white"
            >
              <span className="flex items-center gap-2 ">
                <FaPlus />
                <span>Add to Cart</span>
              </span>
            </button>
            <p className="mt-3">
              <span className="text-xl font-medium text-[#333333]">
                Category:
              </span>{" "}
              <span className="text-[#3e84b9] font-medium text-xl">
                {subCategory}
              </span>
            </p>
          </div>
          {/* col-3 */}
          <div className="border p-3 rounded-md">
            <div>
              <button
                //   onClick={() => handleAddToWishlist(product)}
                className="bg-gray-100 mb-3 px-4 py-1 text-[#333333] border border-[#84b93e] active:scale-[-10px] duration-300 active:bg-[#84b93e] active:text-white hover:text-[#84b93e] rounded-full"
              >
                <span className="flex items-center gap-2">
                  <FaRegHeart className=" text-red-500 " />{" "}
                  <span className=" font-medium">Add to WishList</span>
                </span>
              </button>
              {/* share social */}
              <div className="flex items-center gap-3">
                <h4 className="text-lg font-medium text-[#333333]">
                  Share with:{" "}
                </h4>
                <div className="flex gap-3 items-center text-xl">
                  <FaFacebookMessenger className="text-sky-500" />
                  <FaWhatsapp className="text-green-600" />
                  <MdOutlineFacebook className="text-sky-500" />
                </div>
              </div>
              <div className="flex gap-1 items-center mt-3">
                <span className="flex gap-1 items-center">
                  <PiVanBold className="text-lg text-[#333333]" />
                  <h4 className="font-bold  text-[#333333]">Delivery: </h4>
                </span>
                <p>1-2 hours</p>
              </div>
              {/* payment  */}
              <div className="inline-block px-3 py-2 border shadow-sm rounded-sm mt-8">
                <span className="flex items-center gap-1  ">
                  <h4 className="font-bold  text-[#333333]">Payments: </h4>
                  <Image
                    src="/assets/payments.webp"
                    alt="sslcommerze"
                    height={50}
                    width={180}
                  />
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="inline-block px-3 py-2 border shadow-sm rounded-sm mt-4">
                  <span className="flex items-center gap-1  ">
                    <h4 className="font-bold  text-[#333333]">Nagad: </h4>
                    <Image
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Mf12Slt1IA8xOQJ4_EBWcxpW65TN91tn0_zKls2uI5wbnwjShjh1mraNmRUvJueQRl8&usqp=CAU"
                      }
                      alt="nagad"
                      height={50}
                      width={50}
                    />
                  </span>
                </div>
                <div className="inline-block px-3 py-2 border shadow-sm rounded-sm mt-4">
                  <span className="flex items-center gap-2  ">
                    <h4 className="font-bold  text-[#333333]">
                      Cash In <br /> Delivery{" "}
                    </h4>
                    <LiaMoneyBillWaveAltSolid className="text-3xl text-green-500" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* review section */}
        <div className="border mt-8 rounded-md">
          <div className="py-2 px-3 bg-gradient-to-b from-gray-50 to-gray-200 ">
            <p className="text-lg font-medium">Review</p>
          </div>
          <div className="p-4">
            <form action=""></form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
