"use client";

import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";

const ShoppingSideBar = () => {
    const [isCartVisible, setIsCartVisible] = useState(false);

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
                    <span className="text-xl"><HiOutlineShoppingBag /></span>
                    0 Item
                </div>
            )}

            {/* Sliding cart */}
            <div
                className={`fixed right-0 top-0 h-screen z-50 bg-white shadow-lg w-[400px] transition-transform duration-500 ease-in-out ${isCartVisible ? "translate-x-0" : "translate-x-full "
                    }`}
            >
                <div className="">
                    <div className="p-4 flex items-center justify-between bg-blue-500 text-white mb-5">
                        <h2 className="text-base font-medium">Your Shopping Cart</h2>
                        <button
                            onClick={handleCloseCart}
                            className=""
                        >
                            <FaArrowRight />
                        </button>
                    </div>

                    <div className="flex items-center justify-between gap-3 p-2 bg-slate-100 border-b px-4 ">
                        <div className="flex items-center gap-3">
                            <img
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

                <div className=" flex items-center justify-between gap-3 bg-slate-100 py-5 px-10 ">
                    <Link
                        href={'/checkout'}
                        className="px-4 py-2 bg-[#84b93e] text-white rounded hover:bg-green-600">View Cart</Link>
                </div>
            </div>
        </div>
    );
};

export default ShoppingSideBar;