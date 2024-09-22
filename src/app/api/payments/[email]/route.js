import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const db = await connectDB();
  const paymentCollection = db.collection("payments");

  try {
    const lastPayment = await paymentCollection
      .find({
        userEmail: params.email,
      })
      .toArray();
    return NextResponse.json(lastPayment[lastPayment.length - 1]);
  } catch (error) {}
};
