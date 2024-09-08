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
                    className="fixed right-0 top-1/2 transform -translate-y-1/2 checkout-icon cursor-pointer text-white bg-red-500 size-16 rounded-md p-2 text-center"
                >
                    0 Item
                </div>
            )}

            {/* Sliding cart */}
            {isCartVisible && (
                <div
                    className="fixed right-0 top-0 h-screen z-50 bg-white shadow-lg w-[400px] transition-transform duration-300"
                    style={{
                        transform: isCartVisible ? "translateX(0)" : "translateX(100%)",
                    }}
                >
                    <div className="p-4">
                        <button
                            onClick={handleCloseCart}
                            className="text-black bg-gray-300 p-2 rounded-md"
                        >
                            Close
                        </button>
                        <h2 className="text-xl font-bold">Cart Items</h2>
                        {/* Add your cart item details here */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CheckOut;
