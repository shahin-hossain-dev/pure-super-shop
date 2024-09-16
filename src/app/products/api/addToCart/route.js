import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const db = await connectDB();
  const addToCartCollection = db.collection("addToCarts");

  try {
    const cartInfo = await request.json();
    const res = await addToCartCollection.insertOne(cartInfo);
    if (res.insertedId) {
      return NextResponse.json({ message: "Posted" });
    }
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};
