import { connectDB } from "@/lib/connectDB";
import axios from "axios";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const db = await connectDB();
  const paymentCollection = db.collection("payments");
  const paymentInfo = await request.json();
  const amount = paymentInfo?.amount;
  // console.log(amount);
  //   initiate data
  const initiateData = {
    store_id: "pures66ed3e3d29573",
    store_passwd: "pures66ed3e3d29573@ssl",
    product_name: "Laptop",
    product_category: "electronics",
    product_profile: "general",
    total_amount: amount.toString(),
    currency: "BDT",
    tran_id: "REF123",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payments/success-payment`,
    fail_url: "http://yoursite.com/fail.php",
    cancel_url: "http://yoursite.com/cancel.php",
    cus_name: "Customer Name",
    cus_email: "cust@yahoo.com",
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

  //post request to ssl api url with initiate data
  const response = await axios({
    method: "POST",
    url: "https://sandbox.sslcommerz.com/gwprocess/v4/api.php",
    data: initiateData,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  });

  // console.log(response.data);

  // save payment data to mongodb database

  const saveData = {
    ...paymentInfo,
    status: "pending",
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
