"use client";

import { useState } from "react";

const CheckOut = () => {
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
                    className="fixed right-0 top-1/2 transform -translate-y-1/2 checkout-icon cursor-pointer text-white bg-red-500 size-16 rounded-md text-center duration-500 ease-in-out"
                >
                    0 Item
                </div>
            )}

            {/* Sliding cart */}
            {isCartVisible && (
                <div
                    className="fixed right-0 top-0 h-screen z-50 bg-white shadow-lg w-[400px] transition-transform duration-500 ease-in-out"
                    style={{
                        transform: isCartVisible ? "translateX(0)" : "translateX(100%)",
                    }}
                >
                    <div className="p-4 flex items-center justify-between">
                        <button
                            onClick={handleCloseCart}
                            className="text-black bg-gray-300 p-2 rounded-md"
                        >
                            Close
                        </button>
                        <h2 className="text-xl font-bold">Cart Items</h2>
                    </div>

                    <div className="flex items-center justify-between gap-3 p-2 bg-slate-100 border-b px-4 ">
                        <div className="flex items-center gap-3">
                            <img className="size-14" src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/65fa96c2d61902ef2307b5f7_Ifad-Eggy-Masala-Noodles-200gm-Buy2-Get1-Free_1_550.webp" alt="" />
                            <div className="space-y-3">
                                <h3 className="text-base">Ifad Eggy Masala Noodles</h3>
                                <div className="quantity flex items-center gap-4">
                                    <button className="border border-black text-center px-2 rounded-md text-xl"> - </button>
                                    <p className="">1</p>
                                    <button className="border border-black text-center px-2 rounded-md text-xl"> + </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between gap-3">
                            <button> X </button>
                            <p>৳180</p>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default CheckOut;
