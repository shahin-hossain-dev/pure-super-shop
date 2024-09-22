"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const PaymentSuccess = () => {
  const session = useSession();
  const email = session?.data?.user?.email;

  const { data = {} } = useQuery({
    queryKey: ["successData"],
    queryFn: async () => {
      const data = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/payments/${email}`
      );
      console.log(data.data);
      return data?.data;
    },
  });
  console.log(data);
  const { cus_name, paymentDate, tranId, userEmail, amount } = data;
  return (
    <div>
      <div className="bg-green-200 py-3 px-5">
        <h2 className="text-green-800 text-center font-medium text-lg">
          Payment Successful
        </h2>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <FaRegCheckCircle className="text-5xl mb-3 -mt-20 lg:-mt-20 text-green-600" />
          <h2 className="text-center font-medium text-lg">
            Payment Successful
          </h2>
          <p className="text-gray-400 mb-5">Thank you for your purchase</p>
          <div className="text-center space-y-2">
            <p>
              <span className="font-medium">Amount Paid:</span> ${amount}
            </p>
            <p>
              <span className="font-medium">Customer Name:</span> {cus_name}
            </p>
            <p>
              <span className="font-medium">Transaction ID:</span>{" "}
              <span className="bg-green-100 px-2 rounded-lg">{tranId}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
