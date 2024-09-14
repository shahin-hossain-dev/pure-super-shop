import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const reviewCollection = db.collection("reviews");

  try {
    const query = { productId: params.productId };
    const reviews = await reviewCollection.find(query).toArray();
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json({ message: "Something went Wrong" });
  }
};
