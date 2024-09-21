import { connectDB } from "@/lib/connectDB";
import axios from "axios";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import queryString from "query-string";

export const POST = async (request) => {
  const db = await connectDB();
  const paymentCollection = db.collection("payments");
  const paymentInfo = await request.json();
  const amount = paymentInfo?.amount;
  // console.log(amount);

  const tranId = new ObjectId().toString();

  // step-1: initiate data
  const initiateData = {
    store_id: "pures66ed3e3d29573",
    store_passwd: "pures66ed3e3d29573@ssl",
    product_name: paymentInfo.products,
    product_category: "general",
    product_profile: "general",
    total_amount: amount.toString(),
    currency: "BDT",
    tran_id: tranId,
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payments/success-payment`,
    fail_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payments/failed`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payments/cancel`,
    cus_name: paymentInfo.cus_name,
    cus_email: paymentInfo.userEmail,
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: 1000,
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    shipping_method: "NO",
    multi_card_name: "mastercard, visacard, amexcard",
    value_a: "ref001_A",
    value_b: "ref002_B",
    value_c: "ref003_C",
    value_d: "ref004_D",
  };

  const urlEncodedData = queryString.stringify(initiateData); //make data query string

  //step-2:  post request to ssl api url with initiate data
  const response = await axios.post(
    "https://sandbox.sslcommerz.com/gwprocess/v4/api.php",
    urlEncodedData,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  // console.log(response.data);

  //step-3: save payment data to mongodb database

  const randomNumber = () => {
    const number = `pay_${Math.floor(
      Math.random() * 10000 + (1000000 - 99999)
    )}`;
    if (number.length < 10) {
      randomNumber();
    }
    return number;
  };
  const paymentId = randomNumber();
  const saveData = {
    tranId,
    paymentId,
    ...paymentInfo,
    status: "pending",
    billingAddress: {
      city: "Dhaka",
    },
  };

  try {
    const save = await paymentCollection.insertOne(saveData);

    if (save.insertedId) {
      return NextResponse.json({
        paymentURL: response?.data?.GatewayPageURL,
      });
    }
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong", error });
  }
};
