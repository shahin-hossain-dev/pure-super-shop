"use client";

import CartCard from "@/components/ShoppingSideBar/CartCard/CartCard";
import { AddToCartContext } from "@/services/AddToCartProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useContext, useState } from "react";
import { ImSpinner3 } from "react-icons/im";

const CheckOut = () => {
  const session = useSession();
  const [loading, setLoading] = useState(false);
  const { update } = useContext(AddToCartContext);
  const userEmail = session?.data?.user?.email;
  const userName = session?.data?.user?.name;

  const {
    data: carts,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["carts", userEmail, update],
    queryFn: async () => {
      const data = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/addToCart/${userEmail}`
      );
      // console.log(data.data);
      return data.data;
    },
  });

  const totalPrice = carts
    ?.reduce((acc, cur) => acc + cur.totalPrice, 0)
    .toFixed(2);

  const { mutate } = useMutation({
    mutationFn: async (id) => {
      const resp = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/addToCart/delete/${id}`
      );

      if (resp) {
        refetch();
      }
    },
  });
  // delete handler
  const handleDelete = (id) => {
    mutate(id);
  };
  //  create payment info
  const paymentInfo = {
    cus_name: userName,
    userEmail: userEmail,
    amount: parseFloat(totalPrice),
    paymentDate: new Date().toISOString(),
    products: carts?.map((cart) => {
      const paymentInfo = {
        productName: cart.productName,
        productId: cart.productId,
        quantity: cart.quantity,
        unitPrice: cart.price,
        totalPrice: cart.totalPrice,
      };
      return paymentInfo;
    }),
  };
  // payment handler
  // payment post request to server with payment data
  const handlePayment = async () => {
    setLoading(true);
    const resp = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/payments/create-payment`,
      paymentInfo
    );

    const redirectURL = resp?.data?.paymentURL;
    if (redirectURL) {
      window.location.replace(redirectURL);
    }
    setLoading(false);
  };
  return (
    <div className="max-w-[1440px] w-[95%] md:w-11/12 mx-auto py-20 px-3 lg:px-0 flex flex-col lg:flex-row gap-24">
      <div className="w-full lg:w-2/3">
        <h2 className="text-3xl font-Barlow font-semibold mb-6">
          An overview of your order
        </h2>
        <div className="rounded-lg">
          {/* this code for loop */}
          <div className="p-6 border-b bg-[#FAFAFA]">
            {carts?.length === 0 && (
              <h2 className="text-xl font-medium text-center text-gray-400">
                Cart is Empty{" "}
              </h2>
            )}
            <div>
              {carts?.map((cart) => (
                <CartCard
                  key={cart._id}
                  cart={cart}
                  handleDelete={handleDelete}
                  refetch={refetch}
                  isFetching={isFetching}
                ></CartCard>
              ))}
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
              <span>Subtotal</span> <span>$ {totalPrice}</span>
            </div>
            <div className="flex justify-between text-[#656565] font-Barlow text-xl font-normal">
              <span>Shipping</span>
              <span>$0</span>
            </div>
            {/* <div className="flex justify-between text-[#656565] font-Barlow text-xl font-normal">
              <span className="flex items-center">Estimated Tax</span>
              <span>$-</span>
            </div> */}
          </div>
          <div className="flex border-t justify-between text-[#656565] font-Barlow text-2xl font-semibold">
            <span>Total</span>
            <span>$ {totalPrice}</span>
          </div>
        </div>
        <button
          disabled={carts?.length === 0 && true}
          onClick={handlePayment}
          className={`mt-6 w-full flex justify-center py-3 bg-[#84b93e] text-lg font-Barlow text-white rounded-lg ${
            carts?.length === 0 && "bg-gray-400"
          }`}
        >
          {loading ? (
            <ImSpinner3 className="animate-spin text-center" />
          ) : (
            "Place to Order"
          )}
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
