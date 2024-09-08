"use client"
import React, { useState } from 'react';

const CheckOut = () => {
    const [isOpen, setisOpen] = useState();

    const handleCartItem = () => {
        console.log('Hello');

    }

    return (
        <div>
            <div onClick={handleCartItem} className="checkout-icon bg-red-500 size-16 rounded-md p-1 text-center">
                <button className='text-white'>items</button>
            </div>
        </div>
    );
};

export default CheckOut;