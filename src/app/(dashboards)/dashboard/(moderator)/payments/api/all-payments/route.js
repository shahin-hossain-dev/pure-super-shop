import { connectDB } from "@/lib/connectDB";
// import { payments } from "@/lib/payments";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  const paymentCollection = db.collection("payments");
  try {
    const payments = await paymentCollection.find().toArray();
    return NextResponse.json(payments);
  } catch (error) {
    return NextResponse({ message: error.message });
  }
};
