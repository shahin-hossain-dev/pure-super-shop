import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const addToCartCollection = db.collection("addToCarts");
  console.log(request);
  try {
    const carts = await addToCartCollection
      .find({ userEmail: params?.email })
      .toArray();
    return NextResponse.json(carts);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};
